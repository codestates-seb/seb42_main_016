import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ReviewItem from './ReviewItem';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchReviews } from '../../modules/redux/reviewsSlice';
import API from '../../modules/API';
export default function MyReviewList() {
  const [reviews, setReviews] = useState([]);
  const token = localStorage.getItem('accessToken');
  const refresh = localStorage.getItem('refresh');
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
      'X-refresh-Token': refresh,
    },
  };
  useEffect(() => {
    API.get('/reviews', { headers })
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
    <>
      <Container>
        {reviews &&
          reviews.map((reviews) => {
            return <ReviewItem reviews={reviews} key={reviews.id} />;
          })}
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
