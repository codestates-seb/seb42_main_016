import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment/moment';
import { logout } from '../modules/redux/userSlice';
import { setTime } from '../modules/redux/messageSlice';

function TokenChecker() {
  const dispatch = useDispatch();

  useEffect(() => {
    const expiration = moment(localStorage.getItem('exp'));
    const now = moment();
    if (now.isAfter(expiration)) {
      dispatch(setTime('로그인 유효시간이 만료되었습니다.'));
      dispatch(logout());
    } else {
      const timeout = expiration.diff(now);
      const timerId = setTimeout(() => {
        dispatch(setTime('로그인 유효시간이 만료되었습니다.'));
        dispatch(logout());
      }, timeout);
      return () => {
        clearTimeout(timerId);
      };
    }
  }, [dispatch]);

  return null;
}

export default TokenChecker;
