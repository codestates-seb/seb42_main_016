import MypageSidebar from '../components/mypage/MypageSidebar';
import * as S from '../components/style/MyPageStyle';
import { Outlet, Navigate } from 'react-router-dom';
import Header from '../components/Header';
import { Footer } from '../components/style/FooterStyle';
import TopButton from '../components/stylebook/TopButton';
import { useSelector } from 'react-redux';
import { selectUser } from '../modules/redux/userSlice';

export default function Mypage() {
  const { user } = useSelector(selectUser);

  if (!user) {
    return <Navigate replace to="/login" />;
  }

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
