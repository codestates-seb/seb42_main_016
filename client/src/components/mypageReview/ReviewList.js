import React, { useEffect } from 'react';
import styled from 'styled-components';
import ReviewItem from './ReviewItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReviews } from '../../modules/redux/reviewsSlice';

export default function ReviewList() {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.reviews.reviews);

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);
  // function AddModal(){
  //   return(
  //     <S.ModalWrap>
  //     <p>리뷰 등록</p>
  //     <input type='file' accept='image/*'/>
  //     <input></input>
  //     <div className='button'>
  //     <button >완료</button>
  //     <button onClick={()=>setModal(false)}>아니오</button>
  //     </div>
  //     </S.ModalWrap>)
  // }
  // console.log(reviews)
  return (
    <Container>{reviews && reviews.map((review) => <ReviewItem key={review.id} />)}</Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
