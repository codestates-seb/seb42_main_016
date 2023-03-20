import styled from 'styled-components';
import ReserveItem from './ReserveItem';

export default function WriteReview() {
  return (
    <Container>
      <ReserveItem />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
