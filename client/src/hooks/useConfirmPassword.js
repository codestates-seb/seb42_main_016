import {useState, useEffect} from 'react';

function useConfirmPassword(value, password) {
	const [validConfirmPasswordText, setValidConfirmPasswordText] = useState('');
	const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(false);

	useEffect(() => {
		if (value.length > 0 && password !== value) {
			setValidConfirmPasswordText('비밀번호가 일치하지 않습니다.');
			setIsValidConfirmPassword(true);
		} else {
			setValidConfirmPasswordText('');
			setIsValidConfirmPassword(false);
		}
		// eslint-disable-next-line
	}, [value]);

	return {validConfirmPasswordText, isValidConfirmPassword};
}

export default useConfirmPassword;
