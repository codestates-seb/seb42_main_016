import { useEffect } from 'react';
import * as S from '../style/MyPageStyle';
import ReviewItem from './ReviewItem';
import { useSelector, useDispatch } from 'react-redux';
import { selectReviews, fetchReviews } from '../../modules/redux/reviewsSlice';
import Empty from '../Empty';

export default function MyReviewList() {
  const dispatch = useDispatch();
  const reviews = useSelector(selectReviews);
  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);
  console.log(reviews);
  return (
    <S.Container>
      {reviews?.length ? (
        reviews.map((reviews) => {
          return <ReviewItem reviews={reviews} key={reviews.id} />;
        })
      ) : (
        <Empty text={'작성한 리뷰가 없습니다.'} />
      )}
    </S.Container>
  );
}
