import { useDispatch } from 'react-redux';
import { openModal } from '../../modules/redux/modalSlice';
import { IoIosCut } from 'react-icons/io';

import * as S from '../style/ReviewStyle';
import { REVIEWEDITMODAL, REVIEWCONFIRMMODAL } from '../../modules/ModalContainer';
// import useAxios from '../../hooks/useAxios';

export default function ReviewItem({ reviews }) {
  const dispatch = useDispatch();
  const { reviewId } = reviews;
  const handleOpenReviewEditModal = () => {
    dispatch(
      openModal({
        modalType: REVIEWEDITMODAL,
        isOpen: true,
        data: reviews,
      }),
    );
  };

  const handleOpenConfirmModal = () => {
    dispatch(
      openModal({
        modalType: REVIEWCONFIRMMODAL,
        isOpen: true,
        data: reviewId,
      }),
    );
  };

  return (
    <S.RIWrap>
      <S.Content>
        <S.HairshopInfo>
          <IoIosCut className="icon" />
          {reviews.hairShopName}
        </S.HairshopInfo>
        <S.Review>
          <S.FlexReview>
            <S.Photo>
              <img src={reviews.reviewImage} alt="img" />
            </S.Photo>
            <S.Text>{reviews.reviewText}</S.Text>
          </S.FlexReview>
        </S.Review>
        <S.ButtonBox>
          <S.Button onClick={handleOpenReviewEditModal}>수정</S.Button>
          <S.Button onClick={handleOpenConfirmModal}>삭제</S.Button>
        </S.ButtonBox>
      </S.Content>
    </S.RIWrap>
  );
}
