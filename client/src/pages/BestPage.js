import BestStyleList from '../components/mainpage/BestStyleList';
import * as S from '../components/style/MainStyle';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TopButton from '../components/stylebook/TopButton';
import BestShopList from '../components/mainpage/BestShopList';
import moment from 'moment/moment';

export default function MainPage() {
  const hour = moment().format('HH');
  return (
    <S.MainContainer>
      <Header />
      <S.BS>
        BEST 스타일<span>지난 24시간 좋아요 TOP 3 스타일, {hour}:00 기준</span>
      </S.BS>
      <BestStyleList />
      <S.BS>
        BEST 미용실<span>지난 24시간 좋아요 TOP 10 미용실, {hour}:00 기준</span>
      </S.BS>
      <BestShopList />
      <TopButton />
      <Footer />
    </S.MainContainer>
  );
}
