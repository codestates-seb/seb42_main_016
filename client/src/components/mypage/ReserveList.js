import { useSelector } from 'react-redux';
import * as S from '../style/MyPageStyle';
import ReserveItem from './ReserveItem';

export default function ReserveList() {
  let reserve = useSelector((state) => state.reserve);
  console.log(reserve);
  return (
    <S.RLWrap>
      <h4>예약 내역</h4>
      <ReserveItem />
    </S.RLWrap>
  );
}
