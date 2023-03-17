import styled from 'styled-components';

export const UserContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TitleContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
`;

export const InfoTitle = styled.h2`
  float: left;
  color: #333;
  font-size: 22px;
  line-height: 30px;
  width: 100%;
`;

export const InfoButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
`;

export const InfoButton = styled.button`
  font-size: 14px;
  background-color: transparent;
  border: none;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  svg {
    font-size: 18px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
`;

export const ContentTitleContainer = styled.div`
  padding-top: 25px;
  overflow: hidden;
  position: relative;
  width: 100%;
  padding: 36px 0 7px;
  border-bottom: 1px solid #666;
  font-size: 0;
  line-height: 0;
`;

export const ContentTitle = styled.h2`
  float: left;
  color: #333;
  font-size: 20px;
  line-height: 30px;
  margin: 0;
`;

export const MoreButton = styled.button`
  position: absolute;
  background-color: transparent;
  border: none;
  bottom: 10px;
  right: 0;
  padding: 0 15px 0 0;
  color: #666;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    font-size: 18px;
    vertical-align: middle;
  }
`;

export const MyInfoContent = styled.div`
  border-bottom: 1px solid #ddd;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WithdrawText = styled.div`
  width: 100%;
  height: 100px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  color: #666;
  font-size: 14px;
  span {
    cursor: pointer;
    border-bottom: 1px solid #666;
  }
`;
