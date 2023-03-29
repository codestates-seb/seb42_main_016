import { useState, useEffect } from 'react';

function useEmail(value) {
  const [validEmailText, setValidEmailText] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);

  useEffect(() => {
    const regex = /^[0-9a-zA-Z]+@[0-9a-zA-Z]+\.[0-9a-zA-Z]/;
    if (value.length > 0 && !regex.test(value)) {
      setValidEmailText('올바른 이메일을 입력해주세요.');
      setIsValidEmail(true);
    } else {
      setValidEmailText('');
      setIsValidEmail(false);
    }
  }, [value]);

  return { validEmailText, isValidEmail };
}

export default useEmail;
