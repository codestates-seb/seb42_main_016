import { useState, useEffect } from 'react';

function usePassword(value) {
  const [validPasswordText, setValidPasswordText] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(false);

  useEffect(() => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (value.length > 0 && !regex.test(value)) {
      setValidPasswordText('영문자, 숫자, 특수문자를 모두 포함하고 8자 이상 입력해주세요.');
      setIsValidPassword(true);
    } else {
      setValidPasswordText('');
      setIsValidPassword(false);
    }
  }, [value]);

  return { validPasswordText, isValidPassword };
}

export default usePassword;
