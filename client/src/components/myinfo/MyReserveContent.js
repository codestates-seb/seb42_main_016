import * as S from '../style/MyInfoStyle';
import { MdNavigateNext } from 'react-icons/md';
import Empty from '../Empty';
import ReserveItem from '../mypage/ReserveItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchReserve, selectReserve } from '../../modules/redux/reserveSlice';

function MyReserveContent({ title, text, onClick }) {
  const dispatch = useDispatch();
  const reserve = useSelector(selectReserve);
  useEffect(() => {
    dispatch(fetchReserve(1));
  }, [dispatch]);

  const filteredData = reserve.length > 0 ? [reserve[0], reserve[1]] : [];
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
          filteredData.map((reserve) => {
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
