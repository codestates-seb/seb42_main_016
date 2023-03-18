import { useSelector, useDispatch } from 'react-redux';
import { selectLike, setIsSubmit } from '../modules/redux/likeSlice';
import API from '../modules/API';
import { STYLELIKE_ENDPOINT } from '../modules/endpoints';

function useReviewLike(id, like, likeId) {
  const { isSubmit } = useSelector(selectLike);
  const dispatch = useDispatch();
  const token = localStorage.getItem('accessToken');
  const refresh = localStorage.getItem('refresh');

  const onLikeButtonClick = () => {
    if (isSubmit) {
      return;
    }

    dispatch(setIsSubmit(true));

    if (!like) {
      API.post(
        `${STYLELIKE_ENDPOINT}/${id}`,
        { reviewId: id },
        {
          headers: {
            Authorization: token,
            Refresh: refresh,
          },
        },
      )
        .then((res) => {
          console.log('좋아요 등록', res);
        })
        .finally(() => {
          dispatch(setIsSubmit(false));
        });
    } else {
      API.delete(`${STYLELIKE_ENDPOINT}/${likeId}`, {
        headers: {
          Authorization: token,
          Refresh: refresh,
        },
      })
        .then((res) => {
          console.log('좋아요 취소', res);
        })
        .finally(() => {
          dispatch(setIsSubmit(false));
        });
    }
  };

  return { onLikeButtonClick };
}

export default useReviewLike;
