import { useState, useEffect } from 'react';
import API from '../modules/API';
import { selectUser } from '../modules/redux/userSlice';
import { useSelector } from 'react-redux';

function useInfiniteScroll(url, perPage) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const { user } = useSelector(selectUser);
  const token = localStorage.getItem('accessToken');
  const refresh = localStorage.getItem('refresh');

  useEffect(() => {
    setLoading(true);

    const headers = {};

    if (user) {
      headers.Authorization = token;
      headers.Refresh = refresh;
    }

    // API.get(`${url}?page=${page}&size=${perPage}`, {
    API.get(`${url}?_page=${page}&_limit=${perPage}`, {
      headers: headers,
    })
      .then((res) => {
        // setData((prevData) => [...prevData, ...res.data.data]);
        // setHasMore(res.data.data.length > 0);
        setData((prevData) => [...prevData, ...res.data]);
        setHasMore(res.data.length > 0);
      })
      .finally(() => setLoading(false));
  }, [page]);

  const handleScroll = (e) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom && !loading && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return { data, loading, handleScroll };
}

export default useInfiniteScroll;
