import * as S from './style/HeaderStyle';
// import { Link } from 'react-router-dom';

function Header(){
    return(
        <S.Container>
            <S.Logo>
            로고
            </S.Logo>
            <S.Menu>
                <S.List>
                스타일북
                </S.List>
                <S.List>
                내 주변 미용실
                </S.List>
            </S.Menu>
            <S.Login>
                <S.List>
                로그인
                </S.List>
                <S.List>
                회원가입
                </S.List>
            </S.Login>
        </S.Container>
    )
}

export default Header;