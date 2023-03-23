// import { useSelector } from 'react-redux';
import * as S from '../style/MyPageStyle';
import ReserveItem from './ReserveItem';

export default function ReserveList() {
  // let reserve = useSelector((state) => state.reserve);
  // console.log(reserve);
  return (
    <S.Container>
      <S.ContentBox>
        <S.Content>
          <S.TitleBox>
            <S.Title>예약 내역</S.Title>
          </S.TitleBox>
          <ReserveItem />
        </S.Content>
      </S.ContentBox>
    </S.Container>
  );
}
