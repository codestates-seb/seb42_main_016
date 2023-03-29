import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  padding: 0 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  ${({ last }) =>
    last &&
    css`
      border-bottom: none;
    `}
`;

export const Content = styled.div`
  overflow: hidden;
  padding: 24px 0;
`;

export const ImgReview = styled.div`
  overflow: hidden;
  width: 100px;
  min-width: 100px;
  min-height: 100px;
  border-radius: 3px;
  img {
    width: 100%;
    height: 100px;
    overflow: clip;
  }
`;

export const TextReview = styled.p`
  overflow: hidden;
  position: relative;
  font-size: 15px;
  line-height: 22px;
  color: #333;
  white-space: pre-wrap;
  margin-bottom: 10px;
`;

export const ReviewDate = styled.div`
  color: #888;
  font-size: 14px;
  line-height: 17px;
  margin-bottom: 15px;
`;

export const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TextWrapper = styled.div`
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100px;
`;

export const PageContainer = styled.div`
  flex: 0 0 auto;
  justify-content: center;
  align-items: center;
  padding: 12px 0;
  display: flex;
`;

export const PageList = styled.ol`
  flex: 0 0 auto;
  padding: 0 14px;
  white-space: nowrap;
`;

export const PageNum = styled.li`
  display: inline-block;
  padding: 0;
  margin-bottom: 8px;
`;

export const PageBtn = styled.button`
  color: #666;
  min-width: 30px;
  height: 28px;
  border: 1px solid transparent;
  border-radius: 5px;
  padding: 0 7px;
  margin: 0 3px;
  font-size: 14px;
  font-weight: normal;
  line-height: 26px;
  text-align: center;
  background-color: transparent;
  &.selected {
    border-color: cornflowerblue;
    color: cornflowerblue;
  }
`;

export const ArrowBtn = styled.button`
  flex: 0 0 auto;
  width: 28px;
  height: 28px;
  padding: 0 7px;
  margin: 0 3px;
  background-color: transparent;
  border: none;
  :disabled {
    opacity: 0.4;
    cursor: default;
  }
  svg {
    font-size: 16px;
    color: #888;
  }
`;

export const ReviewFlex = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
`;

export const ReviewText = styled.div`
  color: #666;
  font-size: 15px;
  line-height: 17px;
  margin-right: 10px;
  font-weight: 400;
`;
