import BestStyleList from '../components/mainpage/BestStyleList';
import * as S from '../components/style/MainStyle';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TopButton from '../components/stylebook/TopButton';
import BestShopList from '../components/mainpage/BestShopList';
import { useSelector } from 'react-redux';
import { selectLoading } from '../modules/redux/loadingSlice';
import Loading from '../components/Loading';

export default function MainPage() {
  const { loading } = useSelector(selectLoading);

  return (
    <S.MainContainer>
      <Header />
      <S.BS>Best 스타일</S.BS>
      <BestStyleList />
      <S.BS>추천 미용실</S.BS>
      <BestShopList />
      {loading && <Loading />}
      <TopButton />
      <Footer />
    </S.MainContainer>
  );
}
