import MypageSidebar from '../components/mypage/MypageSidebar';
import * as S from '../components/style/MyPageStyle';
import { Outlet } from 'react-router-dom';

export default function Mypage() {
  return (
    <S.MypageContainer>
      <MypageSidebar />
      <S.Section>
        <Outlet></Outlet>
      </S.Section>
    </S.MypageContainer>
  );
}
