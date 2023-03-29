import * as S from '../style/MyInfoStyle';
import { MdNavigateNext } from 'react-icons/md';
import Empty from '../Empty';
import ReviewItem from '../mypageReview/ReviewItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReviews, selectReviews } from '../../modules/redux/reviewsSlice';

function MyReviewContent({ title, text, onClick }) {
  const dispatch = useDispatch();
  const reviews = useSelector(selectReviews);
  useEffect(() => {
    dispatch(fetchReviews(1));
  }, [dispatch, reviews]);

  const filteredData = reviews.length > 0 ? [reviews[0]] : [];
  return (
    <>
      <S.ContentTitleContainer>
        <S.ContentTitle>{title}</S.ContentTitle>
        <S.MoreButton onClick={onClick}>
          더보기 <MdNavigateNext />
        </S.MoreButton>
      </S.ContentTitleContainer>
      <S.MyInfoContent>
        {filteredData?.length ? (
          filteredData.map((reviews) => {
            return <ReviewItem reviews={reviews} key={reviews.reviewId} />;
          })
        ) : (
          <Empty text={text} />
        )}
      </S.MyInfoContent>
    </>
  );
}

export default MyReviewContent;
