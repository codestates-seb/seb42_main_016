import { useState, useEffect } from 'react';
import moment from 'moment/moment';

function useDogAge(value) {
  const [validText, setValidText] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const now = moment().toDate();
    const age = now.getFullYear() - value.slice(0, 4);
    const isMonth = value.slice(4, 6) > 12 || value.slice(4, 6) === '00';
    const isDay = value.slice(-2) > 31 || value.slice(-2) === '00';
    const isFeb =
      value.slice(4) === '0229' || value.slice(4) === '0230' || value.slice(4) === '0231';
    const isValidDate = moment(value, 'YYYYMMDD').isAfter(moment());
    const valueLen = value.length;

    if (valueLen > 0 && (age > 20 || isMonth || isDay || isFeb || isValidDate || valueLen !== 8)) {
      setValidText('올바른 생년월일을 입력해주세요.');
      setIsValid(true);
    } else {
      setValidText('');
      setIsValid(false);
    }
  }, [value]);

  return { validText, isValid };
}

export default useDogAge;
