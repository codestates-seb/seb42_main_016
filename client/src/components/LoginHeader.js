import * as S from './style/HeaderStyle';

function LoginHeader(){
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
                마이페이지
                </S.List>
                <S.List>
                로그아웃
                </S.List>
            </S.Login>
        </S.Container>
    )
}

export default LoginHeader;