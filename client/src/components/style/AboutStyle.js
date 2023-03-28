import styled from 'styled-components';

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImgContainer = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const ContentContainer = styled.div`
  width: 95%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 300px;
`;

export const AboutSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 300px;
  opacity: 0;
  transition: all 1s;
`;

export const AboutImg = styled.div`
  width: 550px;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const AboutContent = styled.div`
  letter-spacing: 1.5px;
  h2 {
    font-size: 26px;
    color: cornflowerblue;
  }
  p {
    font-size: 20px;
    color: #333;
  }
  &.left {
    margin-left: 50px;
  }
  &.right {
    margin-right: 50px;
  }
  span {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.56);
  }
`;

export const StartContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 200px;
`;

export const LogoWrapper = styled.div`
  width: 350px;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const LogoText = styled.p`
  color: cornflowerblue;
  font-weight: bold;
  font-size: 28px;
  letter-spacing: 5px;
  margin-bottom: 60px;
  margin-top: 0px;
`;

export const ButtonFlex = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-between;
`;

export const StartButton = styled.button`
  width: 130px;
  height: 50px;
  min-height: 50px;
  letter-spacing: 1.5px;
  border-radius: 8px;
  font-size: 16px;
  margin-top: 30px;
  margin-bottom: 40px;
  border: none;
  color: ${(props) => props.color || '#1b1e21'};
  background-color: ${(props) => props.bgcolor || '#6495ed'};
  border: ${(props) => props.border || '1px solid #c2c8cf'};
  font-weight: 600;
  &:hover {
    background-color: ${(props) => props.hover || '#f4f7fa'};
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Content = styled.div`
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

export const GoHome = styled.div`
  margin-top: 0;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }
`;
