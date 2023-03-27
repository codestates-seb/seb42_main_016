import { useState, useEffect } from 'react';
import API from '../modules/API';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '../modules/redux/loadingSlice';
import { selectUser } from '../modules/redux/userSlice';

function useFetch(url) {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const { user } = useSelector(selectUser);
  const token = localStorage.getItem('accessToken');
  const refresh = localStorage.getItem('refresh');

  useEffect(() => {
    dispatch(setLoading(true));

    const headers = {};

    if (user) {
      headers.Authorization = token;
      headers.Refresh = refresh;
    }

    API.get(url, { headers: headers })
      .then((res) => {
        setData(res.data);
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  }, [url, dispatch]);

  return data;
}

export default useFetch;
