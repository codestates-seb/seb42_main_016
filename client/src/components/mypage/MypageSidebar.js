import * as S from '../style/MyPageStyle';
import { useNavigate, useLocation } from 'react-router-dom';
import { MYPAGE, MYDOG, MYINFO, MYRESERVE, MYREVIEW } from '../../modules/routes';
import { useState, useEffect } from 'react';

function MypageSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (location.pathname === `${MYPAGE}`) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }, [location]);

  const handleClick = () => {
    setSelected(false);
  };

  return (
    <S.SidebarContainer>
      <h3 role="presentation" onClick={() => navigate(MYPAGE)}>
        마이페이지
      </h3>
      <ul>
        <li>
          <S.SideNav to={MYINFO} className={selected ? 'active' : ''}>
            나의 정보
          </S.SideNav>
        </li>
        <li>
          <S.SideNav to={MYRESERVE} onClick={handleClick}>
            예약 관리
          </S.SideNav>
        </li>
        <li>
          <S.SideNav to={MYREVIEW} onClick={handleClick}>
            리뷰 관리
          </S.SideNav>
        </li>
        <li>
          <S.SideNav to={MYDOG} onClick={handleClick}>
            강아지 정보
          </S.SideNav>
        </li>
      </ul>
    </S.SidebarContainer>
  );
}

export default MypageSidebar;
