import {useState, useEffect} from 'react';
import API from '../modules/API';

const useAxiosGet = (url) => {
	const [data, setData] = useState([]);
	useEffect(() => {
		if (window) window.scrollTo(0, 0);
		API.get(url).then((res) => {
			setData(res.data);
		});
	}, [url]);
	return data;
};

export default useAxiosGet;
