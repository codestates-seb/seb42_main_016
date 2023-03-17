import { NavLink } from 'react-router-dom';
import { CREVIEW, WREVIEW } from '../../modules/routes';
import * as S from '../style/ReviewStyle';
export default function ReviewTab() {
  return (
    <S.TabWrap>
      <div>
        <NavLink
          to={WREVIEW}
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          작성 가능한 리뷰
        </NavLink>
      </div>
      <div>
        <NavLink
          to={CREVIEW}
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          작성한 리뷰
        </NavLink>
      </div>
    </S.TabWrap>
  );
}
