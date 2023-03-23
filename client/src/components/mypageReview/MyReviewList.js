import { useEffect, useState } from 'react';
import * as S from '../style/MyPageStyle';
import ReviewItem from './ReviewItem';
// import { useSelector } from 'react-redux';
// import { fetchReviews } from '../../modules/redux/reviewsSlice';
import API from '../../modules/API';
import { REVIEW_ENDPOINT } from '../../modules/endpoints';

export default function MyReviewList() {
  const [reviews, setReviews] = useState([]);
  const reviewId = 15;
  useEffect(() => {
    API.get(`${REVIEW_ENDPOINT}/${reviewId}`)
      .then((res) => setReviews(res.data))
      .catch((error) => console.log(error));
  }, []);
  // const dispatch = useDispatch();
  // const reviews = useSelector((state) => state.reviews.reviews);
  // useEffect(() => {
  //   dispatch(fetchReviews());
  // }, [dispatch]);
  console.log(reviews);
  return (
    <S.Container>
      <ReviewItem reviews={reviews} />
      {/* {reviews &&
          reviews.map((reviews) => {
            return <ReviewItem reviews={reviews} key={reviews.id} />;
          })} */}
    </S.Container>
  );
}
