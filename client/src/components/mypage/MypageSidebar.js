import * as S from '../style/MyPageStyle';
import { NavLink } from 'react-router-dom';
import { MYDOG, MYINFO, MYRESERVE, MYREVIEW } from '../../modules/routes';
export default function MypageSidebar() {
  return (
    <S.SidebarContainer>
      <h3>마이페이지</h3>
      <ul>
        <li>
          <NavLink
            to={MYINFO}
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            나의 정보
          </NavLink>
        </li>
        <li>
          <NavLink
            to={MYRESERVE}
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            예약 관리
          </NavLink>
        </li>
        <li>
          <NavLink
            to={MYREVIEW}
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            리뷰 관리
          </NavLink>
        </li>
        <li>
          <NavLink
            to={MYDOG}
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            강아지 정보
          </NavLink>
        </li>
      </ul>
    </S.SidebarContainer>
  );
}
