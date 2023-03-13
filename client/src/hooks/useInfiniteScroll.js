import {useState, useEffect} from 'react';
import API from '../modules/API';

function useInfiniteScroll(url, perPage) {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [hasMore, setHasMore] = useState(true);
	const [page, setPage] = useState(1);

	useEffect(() => {
		setLoading(true);
		API.get(`${url}?_page=${page}&_limit=${perPage}`)
			.then((res) => {
				setData((prevData) => [...prevData, ...res.data]);
				setHasMore(res.data.length > 0);
			})
			.finally(() => setLoading(false));
	}, [page, url, perPage]);

	const handleScroll = (e) => {
		const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
		if (bottom && !loading && hasMore) {
			setPage((prevPage) => prevPage + 1);
		}
	};

	return {data, loading, handleScroll};
}

export default useInfiniteScroll;
