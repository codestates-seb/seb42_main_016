import * as S from './style/HeaderStyle';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <S.Container>
      <S.Logo>
        <Link style={{ textDecoration: 'none' }} to="/">
          로고
        </Link>
      </S.Logo>
      <S.Menu>
        <S.List>스타일북</S.List>
        <S.List>
          <Link style={{ textDecoration: 'none' }} to="/hairshop">
            내 주변 미용실
          </Link>
        </S.List>
      </S.Menu>
      <S.Login>
        <S.List>
          <Link style={{ textDecoration: 'none' }} to="/login">
            로그인
          </Link>
        </S.List>
        <S.List>
          <Link style={{ textDecoration: 'none' }} to="/signup">
            회원가입
          </Link>
        </S.List>
      </S.Login>
    </S.Container>
  );
}

export default Header;
