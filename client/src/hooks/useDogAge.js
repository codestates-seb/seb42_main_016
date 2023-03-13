import {useState, useEffect} from 'react';

function useDogAge(value) {
	const [validText, setValidText] = useState('');
	const [isValid, setIsValid] = useState(false);

	useEffect(() => {
		const age = new Date().getFullYear() - value.slice(0, 4);
		const isMonth = value.slice(4, 6) > 12 || value.slice(4, 6) === '00';
		const isDay = value.slice(-2) > 31 || value.slice(-2) === '00';

		if (value.length > 0 && (age < 0 || age > 20 || isMonth || isDay)) {
			setValidText('올바른 생년월일을 입력해주세요.');
			setIsValid(true);
		} else {
			setValidText('');
			setIsValid(false);
		}
	}, [value]);

	return {validText, isValid};
}

export default useDogAge;
