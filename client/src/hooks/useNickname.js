import { useEffect, useState } from 'react';

function useNickname(value) {
  const [validNicknameText, setValidNicknameText] = useState('');
  const [isValidNickname, setIsValidNickname] = useState(false);

  useEffect(() => {
    const regex = /^[A-Za-z0-9가-힣]{2,10}$/;
    if (value.length > 0 && !regex.test(value)) {
      setValidNicknameText('2~10자내로 입력해주세요.');
      setIsValidNickname(true);
    } else {
      setValidNicknameText('');
      setIsValidNickname(false);
    }
  }, [value]);

  return { validNicknameText, isValidNickname };
}

export default useNickname;
