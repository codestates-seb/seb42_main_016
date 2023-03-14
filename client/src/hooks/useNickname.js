import {useEffect, useState} from 'react';

function useNickname(value) {
	const [validNicknameText, setValidNicknameText] = useState('');
	const [isValidNickname, setIsValidNickname] = useState(false);

	useEffect(() => {
		const regex = /^[A-Za-z0-9]{2,10}$/;
		if (value.length > 0 && !regex.test(value)) {
			setValidNicknameText('영문자 숫자를 조합하여 2~10자내로 입력해주세요.');
			setIsValidNickname(true);
		} else {
			setValidNicknameText('');
			setIsValidNickname(false);
		}
	}, [value]);

	return {validNicknameText, isValidNickname};
}

export default useNickname;
