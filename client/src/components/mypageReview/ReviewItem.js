import { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { deleteReview, updateReview } from '../../modules/redux/reviewsSlice';

export default function ReviewItem({ reviews }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteReview(reviews.id));
  };
  return (
    <RIWrap>
      <div className="review">
        <Photo>{reviews.reviewImage}</Photo>
        <Text>{reviews.reviewText}</Text>
      </div>
      <div className="buttons">
        <Button>수정</Button>
        <Button onClick={handleDelete}>삭제</Button>
      </div>
    </RIWrap>
  );
}
export const RIWrap = styled.div`
  width: 700px;
  height: 210px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 10px;

  .review {
    display: flex;
  }
  .buttons {
    /* border: 1px solid gray; */
    display: flex;
    justify-content: flex-end;
    gap: 5px;
    padding: 5px;
    margin-right: 5px;
  }
`;
export const Photo = styled.image`
  /* border: 1px solid #ddd; */
  img {
    width: 200px;
    height: 150px;
    border-radius: 5px 0px 0px 5px;
  }
`;
export const Text = styled.div`
  font-size: 1.3rem;
  width: 480px;
  height: 150px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 0px 5px 5px 0px;
`;
export const Button = styled.button`
  width: 50px;
  height: 30px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  :hover {
    background-color: white;
  }
`;
