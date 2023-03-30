import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment/moment';
import { logout } from '../modules/redux/userSlice';

function TokenChecker() {
  const dispatch = useDispatch();

  useEffect(() => {
    const expiration = moment(localStorage.getItem('exp'));
    const now = moment();
    if (now.isAfter(expiration)) {
      dispatch(logout());
    } else {
      const timeout = expiration.diff(now);
      const timerId = setTimeout(() => {
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
