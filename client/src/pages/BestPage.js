import BestStyleList from '../components/mainpage/BestStyleList';
import * as S from '../components/style/MainStyle';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TopButton from '../components/stylebook/TopButton';
import BestShopList from '../components/mainpage/BestShopList';

export default function MainPage() {
  return (
    <S.MainContainer>
      <Header />
      <S.BS>
        BEST 스타일<span>지난 24시간 좋아요 수 기준, TOP 3 스타일</span>
      </S.BS>
      <BestStyleList />
      <S.BS>
        BEST 미용실<span>지난 24시간 좋아요 수 기준, TOP 10 미용실</span>
      </S.BS>
      <BestShopList />
      <TopButton />
      <Footer />
    </S.MainContainer>
  );
}
