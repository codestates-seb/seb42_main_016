import * as S from './style/HeaderStyle';
import { HOME, LOGIN, STYLEBOOK, SIGNUP, HAIRSHOP, MYPAGE } from '../modules/routes';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../modules/redux/userSlice';
import { openModal } from '../modules/redux/modalSlice';
import { LOGOUTCONFIRMMODAL } from '../modules/ModalContainer';

function Header() {
  const { user } = useSelector(selectUser);
  const dispatch = useDispatch();

  const onClickLogout = () => {
    dispatch(
      openModal({
        modalType: LOGOUTCONFIRMMODAL,
        isOpen: true,
      }),
    );
  };

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
            <S.NavLinkStyle to={STYLEBOOK} activeclassname="active">
              스타일북
            </S.NavLinkStyle>
          </S.List>
          <S.List>
            <S.NavLinkStyle to={HAIRSHOP} activeclassname="active">
              내 주변 미용실
            </S.NavLinkStyle>
          </S.List>
        </S.Menu>
        <S.Login>
          <S.List>
            {user ? (
              <S.LinkStyle onClick={onClickLogout}>로그아웃</S.LinkStyle>
            ) : (
              <S.LinkStyle to={LOGIN}>로그인</S.LinkStyle>
            )}
          </S.List>
          <S.List>
            {user ? (
              <S.NavLinkStyle to={MYPAGE}>마이페이지</S.NavLinkStyle>
            ) : (
              <S.LinkStyle to={SIGNUP}>회원가입</S.LinkStyle>
            )}
          </S.List>
        </S.Login>
      </S.NavStyle>
    </S.Container>
  );
}

export default Header;
