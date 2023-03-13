import {useState, useEffect} from 'react';
import API from '../modules/API';

function useInfiniteScroll(url, size) {
	const [data, setData] = useState([]);
	const [last, setLast] = useState(0);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await API.get(`${url}?_page=${size}&_limit=${last}`);
				setData(res);
			} catch (err) {
				console.log(err);
			}
		};
	}, []);

	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 10) {
				if (data) {
					const lastId = data[data.length - 1].id;
					setData(API.get(`${url}?size=${size}&_last=${lastId}`));
				}
			}
		};

		window.addEventListener('scroll', onScroll);
		return () => {
			console.log(data);
			window.removeEventListener('scroll', onScroll);
		};
	}, []);
	return data;
}
export default useInfiniteScroll;
