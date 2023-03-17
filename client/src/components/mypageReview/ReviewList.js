import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ReviewItem from './ReviewItem';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchReviews } from '../../modules/redux/reviewsSlice';
import API from '../../modules/API';
export default function ReviewList() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    API.get('/reviews')
      .then((res) => setReviews(res.data))
      .catch((error) => console.log(error));
  }, []);

  console.log(reviews);
  return (
    <Container>
      {reviews &&
        reviews.map((reviews) => {
          return <ReviewItem reviews={reviews} key={reviews.id} />;
        })}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
