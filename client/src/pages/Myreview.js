import * as S from '../components/style/ReviewStyle';
import { Outlet } from 'react-router-dom';
import ReviewTab from '../components/mypageReview/ReviewTab';
import useScrollTop from '../hooks/useScrollTop';

export default function Myreview() {
  useScrollTop();

  return (
    <S.Container>
      <ReviewTab />
      <Outlet></Outlet>
    </S.Container>
  );
}
