import { useState } from "react";
import { useInput } from "../../hooks/useInput";
import { emailRegex, pwdRegex } from "../../helper/regex";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { authService } from "../service/firebase";

const SignUp = () => {
  const [{ email, pwd }, onChange, resetInput] = useInput({
    id: "",
    pwd: "",
  })
  const [signUpDisabled, setSignUpDisabled] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  const regexTest = () => {
    emailRegex.test(email) &&
      pwdRegex.test(pwd)
      ? setSignUpDisabled(false)
      : setSignUpDisabled(true)
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user } = await createUserWithEmailAndPassword(
        authService,
        email,
        pwd,
      );
      await updateProfile(user)
    } catch (error) {
      switch (error.code) {
        case "auth/email-already-in-use":
          setErrorMsg({
            invalid: true,
            message: "이미 사용 중인 이메일입니다."
          });
          break;
        default:
          setErrorMsg({
            invalid: true,
            message: "회원가입에 실패 하였습니다. 다시 시도해주세요."
          });
          break;
      }
      resetInput();
    }
  };

  return (
    <>
      <div>SignUp</div>
      <div>
        <form onSubmit={handleSignUpSubmit}>
          <input 
            name="email"
            type="text"
            value={email}
            onChange={onChange}
            onKeyUp={regexTest}
            placeholder="example@email.com"
          />
          <input 
            name="pwd"
            type="password"
            value={pwd}
            onChange={onChange}
            onKeyUp={regexTest}
            placeholder="비밀번호를 입력하세요."
          />
          <button
            disabled={signUpDisabled}
          >
           회원가입  
          </button>
        </form>
      </div>
    </>
  )
}

export default SignUp;
