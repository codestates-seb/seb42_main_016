import { useSelector, useDispatch } from 'react-redux';
import { selectLike, setIsSubmit } from '../modules/redux/likeSlice';
import API from '../modules/API';
import { STYLEBOOK_ENDPOINT } from '../modules/endpoints';
import { useState } from 'react';

function useReviewLike(id, like) {
  const { isSubmit } = useSelector(selectLike);
  const dispatch = useDispatch();
  const token = localStorage.getItem('accessToken');
  const refresh = localStorage.getItem('refresh');
  const [param, setParam] = useState(null);

  const onLikeButtonClick = () => {
    if (isSubmit) {
      return;
    }

    dispatch(setIsSubmit(true));

    if (!like) {
      API.post(
        `${STYLEBOOK_ENDPOINT}/${id}`,
        { reviewId: id },
        {
          headers: {
            Authorization: token,
            Refresh: refresh,
          },
        }
      )
        .then((res) => {
          console.log('좋아요 등록', res);
          setParam(res.data.styleLikeId);
        })
        .finally(() => {
          dispatch(setIsSubmit(false));
        });
    } else {
      API.delete(`${STYLEBOOK_ENDPOINT}/${param}`, {
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
