import API from '../modules/API';
import {useDispatch} from 'react-redux';
import {closeModal} from '../modules/redux/modalSlice';

function useDelete(url) {
	const token = localStorage.getItem('accessToken');
	const refresh = localStorage.getItem('refresh');
	const dispatch = useDispatch();

	const DELETE = () => {
		API.delete(url, {
			headers: {
				Authorization: token,
				Refresh: refresh,
			},
		})
			.then((res) => {
				console.log('삭제성공', res);
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				dispatch(closeModal());
			});
	};

	return {DELETE};
}

export default useDelete;
