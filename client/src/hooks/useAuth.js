import { useState, useEffect } from 'react';
import API from '../modules/API';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '../modules/redux/loadingSlice';
import { selectUser } from '../modules/redux/userSlice';

function useAuth(url) {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const token = localStorage.getItem('accessToken');
  const refresh = localStorage.getItem('refresh');
  const { user } = useSelector(selectUser);

  useEffect(() => {
    if (window) window.scrollTo(0, 0);

    if (!user) return;

    dispatch(setLoading(true));

    API.get(url, {
      headers: {
        Authorization: token,
        Refresh: refresh,
      },
    })
      .then((res) => {
        setData(res.data);
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
    // eslint-disable-next-line
  }, [url, dispatch]);

  return data;
}

export default useAuth;
