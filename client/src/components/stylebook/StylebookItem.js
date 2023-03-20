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
import { HAIRSHOP } from '../../modules/routes';

export default function StylebookItem({ style, src }) {
  const likeId = style.styleLikeId;
  const [like, setLike] = useState(likeId);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector(selectUser);
  const { onLikeButtonClick } = useReviewLike(style.reviewId, like, likeId);

  const handleShopClick = () => {
    navigate(`${HAIRSHOP}/${style.hairShopId}`);
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
