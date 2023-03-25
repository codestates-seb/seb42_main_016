import styled from 'styled-components';
import { IoConstructOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { HOME } from '../modules/routes';

function Prepare() {
  const navigate = useNavigate();

  return (
    <Container>
      <Content>
        <IoConstructOutline className="icon" />
        <h2>서비스 준비중입니다</h2>
        <GoHome role="presentation" onClick={() => navigate(HOME)}>
          홈으로 가기
        </GoHome>
      </Content>
    </Container>
  );
}

export default Prepare;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #333;
  .icon {
    width: 150px;
    height: 150px;
  }
`;

const GoHome = styled.div`
  margin-top: 0;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }
`;
