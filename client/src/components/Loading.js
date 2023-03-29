import styled from 'styled-components';
import FadeLoader from 'react-spinners/FadeLoader';

const LoadingWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function Loading() {
  return (
    <LoadingWrapper>
      <FadeLoader color="#74b9ff" />
    </LoadingWrapper>
  );
}

export default Loading;
