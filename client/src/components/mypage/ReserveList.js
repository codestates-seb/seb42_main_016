import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReserve, selectReserve, selectPageInfo } from '../../modules/redux/reserveSlice';
import * as S from '../style/MyPageStyle';
import ReserveItem from './ReserveItem';
import Empty from '../Empty';
import Pagenation from './PagenationR';

export default function ReserveList() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  const reserve = useSelector(selectReserve);
  const pageInfo = useSelector(selectPageInfo);
  const totalElements = pageInfo.totalElements;

  const minLen = 4;
  useEffect(() => {
    dispatch(fetchReserve(currentPage));
  }, [dispatch, currentPage]);

  return (
    <S.Container>
      <S.ContentBox>
        <S.Content>
          <S.TitleBox>
            <S.Title>예약 내역</S.Title>
          </S.TitleBox>
          {reserve?.length ? (
            reserve.map((reserve) => {
              return <ReserveItem key={reserve.reservationId} reserve={reserve} />;
            })
          ) : (
            <Empty text={'예약 내역이 없습니다.'} />
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
        </S.Content>
      </S.ContentBox>
    </S.Container>
  );
}
