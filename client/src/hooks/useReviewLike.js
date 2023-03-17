import { useSelector, useDispatch } from 'react-redux';
import { selectLike, setIsSubmit } from '../modules/redux/likeSlice';
import API from '../modules/API';
import { REVIEWLIKE_ENDPOINT } from '../modules/endpoints';
import { useState } from 'react';

function useReviewLike(id, like) {
  const { isSubmit } = useSelector(selectLike);
  const dispatch = useDispatch();
  const token = localStorage.getItem('accessToken');
  const refresh = localStorage.getItem('refresh');
  const [body, setBody] = useState(null);

  const onLikeButtonClick = () => {
    if (isSubmit) {
      return;
    }

    dispatch(setIsSubmit(true));

    if (!like) {
      API.post(
        REVIEWLIKE_ENDPOINT,
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
          setBody(res.data);
        })
        .finally(() => {
          dispatch(setIsSubmit(false));
        });
    } else {
      API.post(REVIEWLIKE_ENDPOINT, body, {
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
