import useFetch from '../../hooks/useFetch';
import { RESERVATION_ENDPOINT } from '../../modules/endpoints';
import * as S from '../style/MyPageStyle';
import ReserveItem from './ReserveItem';
import Empty from '../Empty';

export default function ReserveList() {
  const reserve = useFetch(`${RESERVATION_ENDPOINT}?page=${1}&size=${10}`)['data'];

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
        </S.Content>
      </S.ContentBox>
    </S.Container>
  );
}
