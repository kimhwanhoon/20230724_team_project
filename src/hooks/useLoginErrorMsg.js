import { useMemo } from 'react';

const useLoginErrorMsg = (errorCode) => {
  const errorMessage = useMemo(() => {
    switch (errorCode) {
      case 'auth/user-not-found':
        return '가입된 이메일이 아닙니다.';
      case 'auth/wrong-password':
        return '이메일과 비밀번호가 일치하지 않습니다.';
      case 'auth/network-request-failed':
        return '네트워크 연결에 실패 하였습니다.';
      case 'auth/invalid-email':
        return '잘못된 이메일 형식입니다.';
      case 'auth/internal-error':
        return '잘못된 요청입니다.';
      default:
        return '로그인에 실패하였습니다. 다시 시도해주세요.';
    }
  }, [errorCode]);

  return errorMessage;
};

export default useLoginErrorMsg;