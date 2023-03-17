import * as S from '../style/MyInfoStyle';
import { MdNavigateNext } from 'react-icons/md';
import Empty from '../Empty';

function MyReviewContent({ title, text, onClick, data }) {
  const maxLen = 1;
  const filteredData = data?.filter(({ id }) => id === maxLen);

  return (
    <>
      <S.ContentTitleContainer>
        <S.ContentTitle>{title}</S.ContentTitle>
        <S.MoreButton onClick={onClick}>
          더보기 <MdNavigateNext />
        </S.MoreButton>
      </S.ContentTitleContainer>
      <S.MyInfoContent>{filteredData ? filteredData : <Empty text={text} />}</S.MyInfoContent>
    </>
  );
}

export default MyReviewContent;
