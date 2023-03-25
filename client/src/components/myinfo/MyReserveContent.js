import * as S from '../style/MyInfoStyle';
import { MdNavigateNext } from 'react-icons/md';
import Empty from '../Empty';
import { RESERVATION_ENDPOINT } from '../../modules/endpoints';
import useFetch from '../../hooks/useFetch';
import ReserveItem from '../mypage/ReserveItem';

function MyReserveContent({ title, text, onClick }) {
  const maxPage = 1;
  const maxLen = 2;
  const reserve = useFetch(`${RESERVATION_ENDPOINT}?page=${maxPage}&size=${maxLen}`)['data'];

  return (
    <>
      <S.ContentTitleContainer>
        <S.ContentTitle>{title}</S.ContentTitle>
        <S.MoreButton onClick={onClick}>
          더보기 <MdNavigateNext />
        </S.MoreButton>
      </S.ContentTitleContainer>
      <S.MyInfoContent>
        {reserve?.length ? (
          reserve.map((reserve) => {
            return <ReserveItem key={reserve.reservationId} reserve={reserve} />;
          })
        ) : (
          <Empty text={text} />
        )}
      </S.MyInfoContent>
    </>
  );
}

export default MyReserveContent;
