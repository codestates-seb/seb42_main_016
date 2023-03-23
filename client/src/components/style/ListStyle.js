import styled, { css } from 'styled-components';

export const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  line-height: normal;
`;

export const ListWrapper = styled.div`
  margin-top: 40px;
  width: 70%;
  @media (max-width: 1000px) {
    width: 90%;
  }
`;

export const List = styled.li`
  overflow: hidden;
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  cursor: pointer;
  ${({ last }) =>
    last &&
    css`
      border-bottom: none;
    `}
`;

export const ListFlex = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1 0 auto;
  justify-content: space-evenly;
`;

export const ImgBox = styled.div`
  min-width: 200px;
  height: 200px;
  margin-bottom: 40px;
  @media (max-width: 700px) {
    display: none;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;

export const TextBox = styled.div`
  font-size: 18px;
  line-height: 21px;
  width: 50%;
  margin-left: 15px;
  height: 100%;
  color: #2d3436;
  @media (max-width: 700px) {
    margin-bottom: 30px;
    width: 100%;
  }
`;

export const ShopName = styled.h2`
  margin-top: 20px;
  font-size: 35px;
  line-height: 40px;
  letter-spacing: 2px;
  font-weight: bold;
  word-break: keep-all;
`;

export const Like = styled.div`
  display: flex;
  margin-top: 25px;
  margin-bottom: 20px;
  letter-spacing: 0.8px;

  .like {
    margin-right: 5px;
    align-items: center;
  }
`;

export const Review = styled.div`
  margin-bottom: 20px;
  letter-spacing: 0.8px;
`;

export const Address = styled.div`
  font-size: 16px;
  color: #636e72;
  letter-spacing: 0.5px;
  word-break: keep-all;
`;

export const LocationStyle = styled.h1`
  width: 60%;
  color: #2d3436;
  display: flex;
  justify-content: center;
  font-size: 40px;
  margin-top: 50px;
  margin-bottom: 10px;
  @media (max-width: 1000px) {
    width: 50%;
  }
`;

export const ScrollArea = styled.div`
  height: 100vh;
  overflow-y: auto;
`;
