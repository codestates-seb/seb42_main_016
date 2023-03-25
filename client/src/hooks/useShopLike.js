import { useDispatch, useSelector } from 'react-redux';
import { setIsSubmit, selectLike, setLikeId, setLikeCount } from '../modules/redux/likeSlice';
import API from '../modules/API';
import { HAIRSHOPLIKE_ENDPOINT, HAIRSHOP_ENDPOINT } from '../modules/endpoints';
import { selectUser } from '../modules/redux/userSlice';

function useShopLike(id, like) {
  const { isSubmit, likeId } = useSelector(selectLike);
  const dispatch = useDispatch();
  const token = localStorage.getItem('accessToken');
  const refresh = localStorage.getItem('refresh');
  const { user } = useSelector(selectUser);
  const headers = {};

  if (user) {
    headers.Authorization = token;
    headers.Refresh = refresh;
  }

  const getLikeCount = () => {
    API.get(`${HAIRSHOP_ENDPOINT}/${id}`, { headers: headers }).then((res) =>
      dispatch(setLikeCount(res.data.likeCount)),
    );
  };

  const onLikeButtonClick = () => {
    if (isSubmit) {
      return;
    }

    dispatch(setIsSubmit(true));

    if (!like) {
      API.post(
        `${HAIRSHOPLIKE_ENDPOINT}/${id}`,
        { hairShopId: id },
        {
          headers: {
            Authorization: token,
            Refresh: refresh,
          },
        },
      )
        .then((res) => {
          console.log('좋아요 등록', res);
          dispatch(setLikeId(res.data.hairShopLikeId));
          getLikeCount();
        })
        .finally(() => {
          dispatch(setIsSubmit(false));
        });
    } else {
      API.delete(`${HAIRSHOPLIKE_ENDPOINT}/${likeId}`, {
        headers: {
          Authorization: token,
          Refresh: refresh,
        },
      })
        .then((res) => {
          console.log('좋아요 취소', res);
          getLikeCount();
        })
        .finally(() => {
          dispatch(setIsSubmit(false));
        });
    }
  };

  return { onLikeButtonClick };
}

export default useShopLike;
