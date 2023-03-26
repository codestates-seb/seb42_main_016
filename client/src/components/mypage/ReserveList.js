import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReserve, selectReserve } from '../../modules/redux/reserveSlice';
import * as S from '../style/MyPageStyle';
import ReserveItem from './ReserveItem';
// import useFetch from '../../hooks/useFetch';
// import { RESERVATION_ENDPOINT } from '../../modules/endpoints';
export default function ReserveList() {
  const dispatch = useDispatch();
  const reserve = useSelector(selectReserve);

  useEffect(() => {
    dispatch(fetchReserve());
  }, [dispatch]);
  return (
    <S.Container>
      <S.ContentBox>
        <S.Content>
          <S.TitleBox>
            <S.Title>예약 내역</S.Title>
          </S.TitleBox>
          {reserve &&
            reserve.map((reserve) => {
              return <ReserveItem key={reserve.reservationId} reserve={reserve} />;
            })}
        </S.Content>
      </S.ContentBox>
    </S.Container>
  );
}
