import styled from 'styled-components';
import { IoConstructOutline } from 'react-icons/io5';
function Prepare() {
  return (
    <Container>
      <Content>
        <IoConstructOutline className="icon" />
        <h2>서비스 준비중입니다</h2>
      </Content>
    </Container>
  );
}

export default Prepare;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 200px;
`;

const Content = styled.div`
  margin: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .icon {
    width: 150px;
    height: 150px;
  }
`;
