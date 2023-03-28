import * as S from '../components/style/AboutStyle';
import { IoConstructOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { HOME } from '../modules/routes';

function Prepare() {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Content>
        <IoConstructOutline className="icon" />
        <h2>서비스 준비중입니다</h2>
        <S.GoHome role="presentation" onClick={() => navigate(HOME)}>
          홈으로 가기
        </S.GoHome>
      </S.Content>
    </S.Container>
  );
}

export default Prepare;
