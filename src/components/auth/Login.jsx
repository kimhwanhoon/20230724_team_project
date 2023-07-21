import { useInput } from "../../hooks/useInput";
import { emailRegex, pwdRegex } from "../../helper/regex";

const Login = () => {
  const [{ id, password }, onInputChange, resetInput] = useInput({
    id: "",
    password: "",
  })

  return (
    <div>Login</div>
  )
}

export default Login