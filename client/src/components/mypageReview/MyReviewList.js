import { useEffect, useState } from 'react';
import * as S from '../style/MyPageStyle';
import ReviewItem from './ReviewItem';
import { useSelector, useDispatch } from 'react-redux';
import { selectReviews, fetchReviews, selectPageInfo } from '../../modules/redux/reviewsSlice';
import Empty from '../Empty';
import Pagenation from '../mypage/PagenationR';

export default function MyReviewList() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const reviews = useSelector(selectReviews);
  const pageInfo = useSelector(selectPageInfo);
  const totalElements = pageInfo.totalElements;
  const minLen = 4;
  useEffect(() => {
    dispatch(fetchReviews(currentPage));
  }, [dispatch, currentPage, reviews]);

  return (
    <S.Container>
      {reviews?.length ? (
        reviews.map((reviews) => {
          return <ReviewItem reviews={reviews} key={reviews.reviewId} />;
        })
      ) : (
        <Empty text={'작성한 리뷰가 없습니다.'} />
      )}
      {totalElements > minLen ? (
        <Pagenation
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalElements={totalElements}
        />
      ) : (
        ''
      )}
    </S.Container>
  );
}
