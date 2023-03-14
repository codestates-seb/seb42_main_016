import {useState, useEffect} from 'react';
import API from '../modules/API';
import {useDispatch} from 'react-redux';
import {setLoading} from '../modules/redux/loadingSlice';

function useFetch(url) {
	const dispatch = useDispatch();
	const [data, setData] = useState([]);

	useEffect(() => {
		if (window) window.scrollTo(0, 0);
		dispatch(setLoading(true));

		API.get(url)
			.then((res) => {
				setData(res.data);
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				dispatch(setLoading(false));
			});
	}, [url, dispatch]);

	return data;
}

export default useFetch;
