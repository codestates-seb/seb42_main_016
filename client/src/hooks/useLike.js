import {useSelector, useDispatch} from 'react-redux';
import {openModal} from '../../modules/redux/modalSlice';
import {selectUser} from '../../modules/redux/userSlice';
import {selectLike, setLike} from '../../modules/redux/likeSlice';
import API from '../modules/API';

import axios from 'axios';

function useLike(url, id, body) {
	const {user} = useSelector(selectUser);
	const {like} = useSelector(selectLike);
	const dispatch = useDispatch();
	const token = localStorage.getItem('accessToken');
	const refresh = localStorage.getItem('refresh');

	const onLikeButtonClick = async () => {
		if (!user) {
			dispatch(
				openModal({
					modalType: 'IsLoginModal',
					isOpen: true,
				})
			);
			return;
		}

		// 	try {
		// 		if (like) {
		// 			await API.post(`/${url}/${id}/likes`, body, {
		// 				headers: {
		// 					Authorization: token,
		// 					Refresh: refresh,
		// 				},
		// 			}).then((res) => {
		// 				console.log('좋아요 등록', res);
		// 				const hairShopLikeId = res.data.hairShopLikeId;
		// 				dispatch(setLike(false));
		// 			});
		// 		} else {
		// 			await API.post(`/${url}/${id}/${hairShopLikeId}/dislikes`, {
		// 				headers: {
		// 					Authorization: `Bearer ${user.token}`,
		// 				},
		// 			});
		// 			dispatch(setLike(true));
		// 		}
		// 	} catch (error) {
		// 		console.error(error);
		// 	}
		// };

		return {onLikeButtonClick};
	};
}

export default useLike;

// // 좋아요를 보낼 데이터
// const data = {
// 	memberId: 1,
// 	hairShopId: 1,
// };

// // 좋아요를 보내는 POST 요청
// axios
// 	.post('/api/like', data)
// 	.then((response) => {
// 		// 성공적으로 응답을 받았을 때, hairShopLikeId 값을 변수에 저장
// 		const hairShopLikeId = response.data.hairShopLikeId;

// 		// hairShopLikeId를 이용하여 다시 POST 요청을 보낼 수 있음
// 		const newData = {
// 			hairShopLikeId: hairShopLikeId,
// 			// 다른 데이터 추가
// 		};

// 		// 다시 POST 요청을 보내는 예시
// 		axios
// 			.post('/api/new-data', newData)
// 			.then((response) => {
// 				// 성공적으로 응답을 받았을 때, 처리할 코드 작성
// 			})
// 			.catch((error) => {
// 				// 오류 처리 코드 작성
// 			});
// 	})
// 	.catch((error) => {
// 		// 오류 처리 코드 작성
// 	});
