import * as S from '../style/MyPageStyle';
import ReserveItem from './ReserveItem';
import useFetch from '../../hooks/useFetch';
import { RESERVATION_ENDPOINT } from '../../modules/endpoints';
import Empty from '../Empty';
export default function WriteReview() {
  const reserve = useFetch(`${RESERVATION_ENDPOINT}/non-review?page=${1}&size=${10}`)['data'];
  return (
    <S.Container>
      {reserve?.length ? (
        reserve.map((reserve) => {
          return <ReserveItem key={reserve.reservationId} reserve={reserve} />;
        })
      ) : (
        <Empty text={'작성가능한 리뷰가 없습니다.'} />
      )}
    </S.Container>
  );
}
