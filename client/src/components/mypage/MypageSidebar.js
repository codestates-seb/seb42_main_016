import * as S from '../style/MyPageStyle';
import { NavLink, useNavigate } from 'react-router-dom';
import { MYPAGE } from '../../modules/routes';

export default function MypageSidebar() {
  const navigate = useNavigate();

  return (
    <S.SidebarContainer>
      <h3 role="presentation" onClick={() => navigate(MYPAGE)}>
        마이페이지
      </h3>
      <ul>
        <li>
          <NavLink
            to="myinfo"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            나의 정보
          </NavLink>
        </li>
        <li>
          <NavLink
            to="reserve"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            예약 관리
          </NavLink>
        </li>
        <li>
          <NavLink
            to="review"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            리뷰 관리
          </NavLink>
        </li>
        <li>
          <NavLink
            to="mydog"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            강아지 정보
          </NavLink>
        </li>
      </ul>
    </S.SidebarContainer>
  );
}
