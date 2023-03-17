import MypageSidebar from '../components/mypage/MypageSidebar';
import * as S from '../components/style/MyPageStyle';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import { Footer } from '../components/style/FooterStyle';
import TopButton from '../components/stylebook/TopButton';

export default function Mypage() {
  return (
    <S.MyPageWrapper>
      <Header />
      <S.MypageContainer>
        <MypageSidebar />
        <S.Section>
          <Outlet></Outlet>
        </S.Section>
      </S.MypageContainer>
      <TopButton />
      <Footer />
    </S.MyPageWrapper>
  );
}
