import styled from 'styled-components';

export const HomeContainer = styled.div`
  margin-top: 50px;
  overflow: hidden;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  line-height: normal;
`;

export const HomeContent = styled.div`
  width: 60%;
  height: 100%;
`;

export const ImgContainer = styled.div`
  float: left;
  width: 400px;
  height: 400px;
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const HomeImg = styled.img`
  margin-top: 10px;
  width: 100%;
  height: 100%;
`;

export const TextContainer = styled.div`
  float: right;
  width: 420px;
  @media (max-width: 1200px) {
    float: none;
    width: 100%;
  }
`;

export const Info = styled.div`
  width: 420px;
  overflow: hidden;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const ShopName = styled.h2`
  display: flex;
  margin: 26px 0 0 0;
  font-size: 28px;
  color: rgba(0, 0, 0, 0.87);
  font-weight: bold;
  justify-content: space-between;
  .outline {
    cursor: pointer;
  }
  .fill {
    cursor: pointer;
    color: #ff7675;
  }
`;

export const ShopAddress = styled.p`
  margin: 6px 0 8px 0;
  font-size: 18px;
  padding-top: 6px;
  margin-bottom: 20px;
  color: rgba(0, 0, 0, 0.56);
`;

export const CommentBox = styled.div`
  margin-top: 16px;
  padding: 26px 24px;
  background: rgb(250, 250, 250);
  position: relative;
  margin-bottom: 26px;
`;

export const CommentTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const CommentTitle = styled.strong`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.87);
`;

export const CommentButton = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  background: none;
  border: none;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.56);
  &:hover {
    opacity: 0.5;
  }
`;

export const CommentText = styled.div`
  overflow: hidden;
  height: auto;
  font-size: 16px;
  line-height: 26px;
  margin-top: 10px;
  color: rgba(0, 0, 0, 0.56);
  &.hide {
    height: 52px;
    text-overflow: ellipsis;
  }
`;

export const InfoText = styled.div`
  margin: 10px 0;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.56);
  display: flex;
  align-items: center;
  svg {
    margin-right: 10px;
    fill: #9e9e9e;
    width: 16px;
    height: 18px;
  }
`;

export const LikeButton = styled.div``;
