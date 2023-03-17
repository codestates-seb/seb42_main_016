import { useSelector, useDispatch } from 'react-redux';
import { openModal } from '../modules/redux/modalSlice';
import { selectUser } from '../modules/redux/userSlice';
import { selectLike, setLike, setIsSubmit } from '../modules/redux/likeSlice';
import { setLikeCount } from '../modules/redux/shopSlice';
import API from '../modules/API';
import { HAIRSHOPLIKE_ENDPOINT, HAIRSHOP_ENDPOINT } from '../modules/endpoints';
import { LOGINMODAL } from '../modules/ModalContainer';
import { useState } from 'react';

function useShopLike(id) {
  const { user } = useSelector(selectUser);
  const { like, isSubmit } = useSelector(selectLike);
  const dispatch = useDispatch();
  const token = localStorage.getItem('accessToken');
  const refresh = localStorage.getItem('refresh');
  const [param, setParam] = useState();

  const getLikeCount = () => {
    API.get(`${HAIRSHOP_ENDPOINT}/${id}`).then((res) => dispatch(setLikeCount(res.data.likeCount)));
  };

  const onLikeButtonClick = () => {
    if (!user) {
      dispatch(
        openModal({
          modalType: LOGINMODAL,
          isOpen: true,
        }),
      );
      return;
    }

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
          dispatch(setLike(true));
          setParam(res.data.hairShopLikeId);
          getLikeCount();
        })
        .finally(() => {
          dispatch(setIsSubmit(false));
        });
    } else {
      API.delete(`${HAIRSHOPLIKE_ENDPOINT}/${param}`, {
        headers: {
          Authorization: token,
          Refresh: refresh,
        },
      })
        .then((res) => {
          console.log('좋아요 취소', res);
          dispatch(setLike(false));
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
