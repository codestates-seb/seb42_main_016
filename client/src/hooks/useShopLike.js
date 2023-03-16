import {useSelector, useDispatch} from 'react-redux';
import {openModal} from '../modules/redux/modalSlice';
import {selectUser} from '../modules/redux/userSlice';
import {selectLike, setLike, setIsSubmit} from '../modules/redux/likeSlice';
import {addLike, cancleLike} from '../modules/redux/shopSlice';
import API from '../modules/API';

function useShopLike(id) {
	const {user} = useSelector(selectUser);
	const {like, isSubmit} = useSelector(selectLike);
	const dispatch = useDispatch();
	const token = localStorage.getItem('accessToken');
	const refresh = localStorage.getItem('refresh');

	const onLikeButtonClick = () => {
		if (!user) {
			dispatch(
				openModal({
					modalType: 'IsLoginModal',
					isOpen: true,
				})
			);
			return;
		}

		if (isSubmit) {
			return;
		}

		dispatch(setIsSubmit(true));

		if (!like) {
			API.post(
				`/hair-shop-likes/${id}/likes`,
				{hairShopId: id},
				{
					headers: {
						Authorization: token,
						Refresh: refresh,
					},
				}
			)
				.then((res) => {
					console.log('좋아요 등록', res);
					dispatch(setLike(true));
					dispatch(addLike());
				})
				.finally(() => {
					dispatch(setIsSubmit(false));
				});
		} else {
			API.post(
				`/hair-shop-likes/${id}/likes`,
				{hairShopId: id},
				{
					headers: {
						Authorization: token,
						Refresh: refresh,
					},
				}
			)
				.then((res) => {
					console.log('좋아요 취소', res);
					dispatch(setLike(false));
					dispatch(cancleLike());
				})
				.finally(() => {
					dispatch(setIsSubmit(false));
				});
		}
	};

	return {onLikeButtonClick};
}

export default useShopLike;
