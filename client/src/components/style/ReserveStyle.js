import styled, { css } from 'styled-components';

export const ReserveContainer = styled.div`
  width: 100%;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  position: relative;
  width: 500px;
  color: #333;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  border-bottom: 1px solid #e5e5e5;
  padding: 20px 20px 17px 0px;
  margin: 0 auto;
`;

export const TitleStyle = styled.span`
  padding-right: 20px;
  color: #333;
  white-space: nowrap;
  text-align: left;
`;

export const SelectContainer = styled.div`
  margin: 0 auto;
  padding-top: 15px;
  padding-left: 18px;
  padding-right: 18px;
  padding-bottom: 15px;
  border-bottom: 1px solid #f2f2f2;
  width: 500px;
  display: flex;
  flex-direction: row;
`;

export const DetailBox = styled.div`
  line-height: 1.4;
  display: flex;
  font-size: 16px;
  flex-direction: column;
  justify-content: space-between;
  word-break: keep-all;
  width: 424px;
`;

export const CheckBox = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid #888;
  border-radius: 3px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;
  margin-right: 20px;
  cursor: pointer;
  ${({ selected }) =>
    selected &&
    css`
      color: cornflowerblue;
      border-color: cornflowerblue;
    `}
`;

export const OptionTitle = styled.h3`
  position: relative;
  display: block;
  padding-left: 0;
  font-size: 16px;
  color: #242424;
  font-weight: 600;
  margin: 0;
`;

export const DetailText = styled.p`
  overflow: hidden;
  color: #666;
  font-size: 16px;
  line-height: 24px;
  margin-top: 10px;
  margin-bottom: 0;
  &.empty {
    margin-bottom: 10px;
    cursor: pointer;
    text-align: center;
    width: 464px;
  }
`;
