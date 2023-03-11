import {useState, useEffect} from 'react';
import API from '../modules/API';

const useFetch = (url) => {
	const [data, setData] = useState([]);
	useEffect(() => {
		if (window) window.scrollTo(0, 0);
		API.get(url).then((res) => {
			setData(res.data);
		});
	}, [url]);
	return {data, setData};
};

export default useFetch;
