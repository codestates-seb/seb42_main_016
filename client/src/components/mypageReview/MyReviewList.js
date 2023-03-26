import { useEffect } from 'react';
import * as S from '../style/MyPageStyle';
import ReviewItem from './ReviewItem';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReviews, selectReviews } from '../../modules/redux/reviewsSlice';

export default function MyReviewList() {
  const dispatch = useDispatch();
  const reviews = useSelector(selectReviews);
  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);
  return (
    <S.Container>
      {reviews &&
        reviews.map((reviews) => {
          return <ReviewItem reviews={reviews} key={reviews.reviewId} />;
        })}
    </S.Container>
  );
}
