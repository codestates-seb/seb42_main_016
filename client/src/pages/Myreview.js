import useScrollTop from '../hooks/useScrollTop';
import ReviewTab from '../components/mypageReview/ReviewTab';
import { Outlet } from 'react-router-dom';
export default function Myreview() {
  useScrollTop();
  return (
    <>
      <ReviewTab />
      <Outlet />
    </>
  );
}
