import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { openModal } from '../../modules/redux/modalSlice';
import { IoIosCut } from 'react-icons/io';
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
    <RIWrap>
      <div className="review">
        <div className="shop">
          <IoIosCut className="icon" />
          {reviews.hairShopName}
        </div>
        <FlexReview>
          <Photo>
            <img src={reviews.reviewImage} alt="img" />
          </Photo>
          <Text>{reviews.reviewText}</Text>
        </FlexReview>
      </div>
      <div className="buttons">
        <Button onClick={handleOpenReviewEditModal}>수정</Button>
        <Button onClick={handleOpenConfirmModal}>삭제</Button>
      </div>
    </RIWrap>
  );
}

export const RIWrap = styled.div`
  width: 600px;
  padding: 10px;
  box-shadow: 0 2px 10px rgba(50, 50, 50, 0.1);
  border-radius: 10px;
  margin-bottom: 30px;
  margin: 0 auto;
  .review {
    display: flex;
    flex-direction: column;
  }
  .shop {
    color: #333;
    font-weight: 700;
    font-size: 18px;
    margin-top: 5px;
    margin-left: 18px;
    margin-bottom: 8px;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
    .icon {
      margin-right: 4px;
      width: 24px;
      height: 24px;
    }
  }
  .buttons {
    display: flex;
    justify-content: flex-end;
    gap: 5px;
    padding: 5px;
    margin-right: 10px;
  }
`;
export const Photo = styled.image`
  img {
    width: 150px;
    height: 150px;
    border-radius: 5px 0px 0px 5px;
  }
`;
export const Text = styled.div`
  font-size: 16px;
  color: #333;
  width: 480px;
  height: 150px;
  padding: 10px;
  border: 1px solid #ececec;
  border-radius: 0px 5px 5px 0px;
`;
export const Button = styled.button`
  width: 50px;
  height: 30px;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: #6495ed;
  :hover {
    opacity: 0.8;
  }
`;

export const FlexReview = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: 10px;
  margin-right: 10px;
`;
