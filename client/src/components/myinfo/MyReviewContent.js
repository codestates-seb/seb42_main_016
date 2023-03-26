import * as S from '../style/MyInfoStyle';
import { MdNavigateNext } from 'react-icons/md';
import Empty from '../Empty';
import { REVIEW_ENDPOINT } from '../../modules/endpoints';
import useFetch from '../../hooks/useFetch';
import ReviewItem from '../mypageReview/ReviewItem';

function MyReviewContent({ title, text, onClick }) {
  const maxNum = 1;
  const reviews = useFetch(`${REVIEW_ENDPOINT}/member?page=${maxNum}&size=${maxNum}`)['data'];

  return (
    <>
      <S.ContentTitleContainer>
        <S.ContentTitle>{title}</S.ContentTitle>
        <S.MoreButton onClick={onClick}>
          더보기 <MdNavigateNext />
        </S.MoreButton>
      </S.ContentTitleContainer>
      <S.MyInfoContent>
        {reviews?.length ? (
          reviews.map((reviews) => {
            return <ReviewItem reviews={reviews} key={reviews.id} />;
          })
        ) : (
          <Empty text={text} />
        )}
      </S.MyInfoContent>
    </>
  );
}

export default MyReviewContent;
