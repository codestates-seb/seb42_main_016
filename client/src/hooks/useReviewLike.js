import { useSelector, useDispatch } from 'react-redux';
import { selectLike, setIsSubmit } from '../modules/redux/likeSlice';
import API from '../modules/API';
import { STYLELIKE_ENDPOINT } from '../modules/endpoints';
import { useState } from 'react';

function useReviewLike(id, like, styleLikeId) {
  const { isSubmit } = useSelector(selectLike);
  const dispatch = useDispatch();
  const token = localStorage.getItem('accessToken');
  const refresh = localStorage.getItem('refresh');
  const [param, setParam] = useState(styleLikeId);

  const onLikeButtonClick = () => {
    if (isSubmit) {
      return;
    }

    dispatch(setIsSubmit(true));

    if (!like) {
      API.post(
        `${STYLELIKE_ENDPOINT}/${id}`,
        {},
        {
          headers: {
            Authorization: token,
            Refresh: refresh,
          },
        },
      )
        .then((res) => {
          setParam(res.data.styleLikeId);
        })
        .finally(() => {
          dispatch(setIsSubmit(false));
        });
    } else {
      API.delete(`${STYLELIKE_ENDPOINT}/${param}`, {
        headers: {
          Authorization: token,
          Refresh: refresh,
        },
      }).finally(() => {
        dispatch(setIsSubmit(false));
      });
    }
  };

  return { onLikeButtonClick };
}

export default useReviewLike;
