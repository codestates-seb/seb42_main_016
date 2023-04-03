import styled from 'styled-components';

export const MainContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  top: 0px;
`;

export const BS = styled.div`
  color: #333;
  font-size: 22px;
  font-weight: 600;
  border-bottom: 1px solid #666;
  letter-spacing: 1px;
  margin: 30px 15% 0px;
  max-width: 1300px;
  @media (max-width: 1500px) {
    margin: 30px 10% 0px;
  }
  span {
    font-size: 14px;
    font-weight: 500;
    color: #666;
    margin-left: 15px;
  }
`;
