import styled from 'styled-components';

export const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;
`;

export const Empty = styled.p`
  margin-top: 10px;
  color: #3b3d40;
  font-size: 18px;
  font-weight: 400;
  opacity: 0.4;
  cursor: ${(props) => props.onClick && 'pointer'};
`;
