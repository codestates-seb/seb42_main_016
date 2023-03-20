import * as S from '../style/ReviewStyle';
import { NavLink } from 'react-router-dom';
export default function ReviewTab() {
  return (
    <S.TabWrap>
      <NavLink to={'writereview'}>
        <div>작성 가능한 리뷰</div>
      </NavLink>
      <NavLink to={'readreview'}>
        <div>작성한 리뷰</div>
      </NavLink>
    </S.TabWrap>
  );
}
