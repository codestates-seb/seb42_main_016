import * as S from '../style/ReviewStyle';
import { NavLink } from 'react-router-dom';
import { WRITEREVIEW, READREVIEW } from '../../modules/routes';
export default function ReviewTab() {
  return (
    <S.TabWrap>
      <NavLink
        to={WRITEREVIEW}
        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
        <div>작성 가능한 리뷰</div>
      </NavLink>
      <NavLink
        to={READREVIEW}
        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
        <div>작성한 리뷰</div>
      </NavLink>
    </S.TabWrap>
  );
}
