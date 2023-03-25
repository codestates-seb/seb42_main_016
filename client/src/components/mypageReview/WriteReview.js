import * as S from '../style/MyPageStyle';
import ReserveItem from './ReserveItem';
import useFetch from '../../hooks/useFetch';
import { RESERVATION_ENDPOINT } from '../../modules/endpoints';
export default function WriteReview() {
  const reserve = useFetch(`${RESERVATION_ENDPOINT}?page=${1}&size=${10}`)['data'];
  return (
    <S.Container>
      {reserve &&
        reserve.map((reserve) => {
          return <ReserveItem key={reserve.reservationId} reserve={reserve} />;
        })}
    </S.Container>
  );
}
