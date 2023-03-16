import { IoHeartOutline, IoHeart } from 'react-icons/io5';
import { BiCut } from 'react-icons/bi';
import * as S from '../style/SBStyle';
import { useNavigate } from 'react-router-dom';
import useReviewLike from '../../hooks/useReviewLike';
import { useState } from 'react';
import { openModal } from '../../modules/redux/modalSlice';
import { selectUser } from '../../modules/redux/userSlice';
import { LOGINMODAL } from '../../modules/ModalContainer';
import { useDispatch, useSelector } from 'react-redux';

export default function StylebookItem({ src, id }) {
  const [like, setLike] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector(selectUser);
  const { onLikeButtonClick } = useReviewLike(id, like);

  const handleShopClick = () => {
    navigate();
  };

  const handleLikeClick = () => {
    if (!user) {
      dispatch(
        openModal({
          modalType: LOGINMODAL,
          isOpen: true,
        }),
      );
      return;
    }

    setLike(!like);
    onLikeButtonClick();
  };

  return (
    <S.ItemWrap>
      <S.ItemImage>
        <div className="image" style={{ backgroundImage: `url(${src})` }}></div>
        <S.Itembar>
          {like ? (
            <IoHeart className="icon" onClick={handleLikeClick} />
          ) : (
            <IoHeartOutline className="icon" onClick={handleLikeClick} />
          )}
          <BiCut className="icon" onClick={handleShopClick} />
        </S.Itembar>
      </S.ItemImage>
    </S.ItemWrap>
  );
}
