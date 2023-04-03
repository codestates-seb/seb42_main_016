import { useState, useEffect, useRef } from 'react';
import API from '../modules/API';
import { selectUser } from '../modules/redux/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import { selectLoading, setLoading } from '../modules/redux/loadingSlice';

function useInfiniteScroll(url, perPage) {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const { user } = useSelector(selectUser);
  const { loading } = useSelector(selectLoading);
  const token = localStorage.getItem('accessToken');
  const refresh = localStorage.getItem('refresh');
  const observer = useRef(null);
  const lastRef = useRef(null);

  useEffect(() => {
    dispatch(setLoading(true));

    const headers = {};

    if (user) {
      headers.Authorization = token;
      headers.Refresh = refresh;
    }

    API.get(`${url}?page=${page}&size=${perPage}`, {
      headers: headers,
    })
      .then((res) => {
        setData((prevData) => [...prevData, ...res.data.data]);
        setHasMore(res.data.data.length > 0);
      })
      .finally(() => dispatch(setLoading(false)));
  }, [page]);

  useEffect(() => {
    if (lastRef.current) {
      observer.current = new IntersectionObserver((entries) => {
        const target = entries[0];
        if (target.isIntersecting && hasMore && !loading) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      observer.current.observe(lastRef.current);
    }
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [lastRef, hasMore, loading]);

  return { data, lastRef };
}

export default useInfiniteScroll;
