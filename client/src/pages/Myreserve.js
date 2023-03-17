import ReserveList from '../components/mypage/ReserveList';
import useScrollTop from '../hooks/useScrollTop';

export default function Myreserve() {
  useScrollTop();

  return <ReserveList />;
}
