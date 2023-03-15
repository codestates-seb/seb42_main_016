import {useState, useEffect} from 'react';
import API from '../modules/API';
import {useDispatch} from 'react-redux';
import {setLoading} from '../modules/redux/loadingSlice';

function useAuth(url) {
	const dispatch = useDispatch();
	const [data, setData] = useState([]);
	const token = localStorage.getItem('accessToken');
	const refresh = localStorage.getItem('refresh');

	useEffect(() => {
		if (window) window.scrollTo(0, 0);
		dispatch(setLoading(true));

		API.get(url, {
			headers: {
				Authorization: token,
				Refresh: refresh,
			},
		})
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

export default useAuth;
