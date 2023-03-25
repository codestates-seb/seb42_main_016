// import { useEffect } from 'react';
import * as S from '../style/MyPageStyle';
import ReviewItem from './ReviewItem';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchReviews } from '../../modules/redux/reviewsSlice';
import useFetch from '../../hooks/useFetch';
import { REVIEW_ENDPOINT } from '../../modules/endpoints';

export default function MyReviewList() {
  // const dispatch = useDispatch();
  // const reviews = useSelector((state) => state.reviews.reviews);
  const reviews = useFetch(`${REVIEW_ENDPOINT}/member?page=${1}&size=${10}`)['data'];
  // useEffect(() => {
  //   dispatch(fetchReviews());
  // }, [dispatch]);
  // console.log(reviews);

  return (
    <S.Container>
      {/* <ReviewItem reviews={reviews} /> */}
      {reviews &&
        reviews.map((reviews) => {
          return <ReviewItem reviews={reviews} key={reviews.id} />;
        })}
    </S.Container>
  );
}
