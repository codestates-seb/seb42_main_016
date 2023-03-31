import { useState, useEffect, useRef } from 'react';
import API from '../modules/API';
import { selectUser } from '../modules/redux/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import { selectLoading, setLoading } from '../modules/redux/loadingSlice';
import { selectLocation, setAddress } from '../modules/redux/locationSlice';

function useShopScroll(url, perPage) {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const { user } = useSelector(selectUser);
  const { loading } = useSelector(selectLoading);
  const token = localStorage.getItem('accessToken');
  const refresh = localStorage.getItem('refresh');
  const { lat, lng } = useSelector(selectLocation);
  const observer = useRef(null);
  const lastShopRef = useRef(null);

  useEffect(() => {
    if (!lat && !lng) {
      dispatch(setLoading(true));
    }
  }, []);

  useEffect(() => {
    if (lat && lng) {
      dispatch(setLoading(true));
      const headers = {};

      if (user) {
        headers.Authorization = token;
        headers.Refresh = refresh;
      }

      API.get(`${url}?page=${page}&size=${perPage}&latitude=${lat}&longitude=${lng}`, {
        headers: headers,
      })
        .then((res) => {
          setData((prevData) => [...prevData, ...res.data.data]);
          setHasMore(res.data.data.length > 0);
          if (res.data.pageInfo.page === 1) {
            const words = res.data.data[0].hairShopAddress.split(' ');
            dispatch(setAddress(`${words[1]} ${words[2]}`));
          }
        })
        .finally(() => dispatch(setLoading(false)));
    }
  }, [page, lat, lng]);

  useEffect(() => {
    if (lastShopRef.current) {
      observer.current = new IntersectionObserver((entries) => {
        const target = entries[0];
        if (target.isIntersecting && hasMore && !loading) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      observer.current.observe(lastShopRef.current);
    }
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [lastShopRef, hasMore, loading]);

  return { data, lastShopRef };
}

export default useShopScroll;
