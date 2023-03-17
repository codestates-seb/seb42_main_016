import * as S from './style/HeaderStyle';
import { HOME, LOGIN, STYLEBOOK, SIGNUP, HAIRSHOP } from '../modules/routes';

function Header() {
  return (
    <S.Container>
      <S.NavStyle>
        <S.Logo>
          <S.LinkStyle className="logo" to={HOME}>
            UDog
          </S.LinkStyle>
        </S.Logo>
        <S.Menu>
          <S.List>
            <S.NavLinkStyle to={STYLEBOOK} activeClassName="active">
              스타일북
            </S.NavLinkStyle>
          </S.List>
          <S.List>
            <S.NavLinkStyle to={HAIRSHOP} activeClassName="active">
              내 주변 미용실
            </S.NavLinkStyle>
          </S.List>
        </S.Menu>
        <S.Login>
          <S.List>
            <S.LinkStyle to={LOGIN}>로그인</S.LinkStyle>
          </S.List>
          <S.List>
            <S.LinkStyle to={SIGNUP}>회원가입</S.LinkStyle>
          </S.List>
        </S.Login>
      </S.NavStyle>
    </S.Container>
  );
}

export default Header;
