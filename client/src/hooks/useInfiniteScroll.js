import { useState, useEffect } from 'react';
import API from '../modules/API';

function useInfiniteScroll(url, perPage) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  // const [cursor, setCursor] = useState(null);

  useEffect(() => {
    setLoading(true);
    // const queryParams = cursor ? `?_limit=${perPage}&_start=${cursor}` : `?_limit=${perPage}`;
    // API.get(`${url}${queryParams}`)

    // API.get(`${url}?page=${page}&size=${perPage}`)
    API.get(`${url}?_page=${page}&_limit=${perPage}`)
      .then((res) => {
        // setData((prevData) => [...prevData, ...res.data.data]);
        // setHasMore(res.data.data.length > 0);
        setData((prevData) => [...prevData, ...res.data]);
        setHasMore(res.data.length > 0);

        // setCursor(res.headers['x-next-page-cursor'] || null);
        // setHasMore(Boolean(res.headers['x-next-page-cursor']));
      })
      .finally(() => setLoading(false));
    // eslint-disable-next-line
  }, [page]);
  // }, [cursor, url, perPage]);

  const handleScroll = (e) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom && !loading && hasMore) {
      setPage((prevPage) => prevPage + 1);
      // setCursor(data[data.length - 1].id);
    }
  };

  return { data, loading, handleScroll };
}

export default useInfiniteScroll;
