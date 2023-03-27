import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MyPageWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

//MyPage
export const MypageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-top: 1px solid #ddd;
`;

//Sidebar
export const SidebarContainer = styled.div`
  width: 12rem;
  position: relative;
  height: 400px;
  h3 {
    padding-top: 10px;
    margin-bottom: 0;
    text-align: left;
    padding-left: 10px;
    cursor: pointer;
    color: #333;
  }
  ul {
    padding-left: 12px;
    padding-top: 0;
  }
  li {
    font-weight: 350;
    font-size: 18px;
    color: #666;
    letter-spacing: 0px;
    padding-bottom: 3px;
  }
`;

export const SideNav = styled(NavLink)`
  text-decoration: none;
  color: #333;
  &.active {
    color: cornflowerblue;
  }
`;

//Mypage_Section
export const Section = styled.div`
  position: relative;
  width: 850px;
  padding: 10px;
  height: 100%;
  min-height: 850px;
`;

//ReserveList
export const RLWrap = styled.div`
  border: 1px solid #ddd;
  padding: 30px;
  border-radius: 1rem;
  height: 100%;
  h4 {
    margin-top: 2px;
    border-bottom: 1px solid #ddd;
  }
`;

//ReserveItem
export const RIWrap = styled.div`
  width: 400px;
  margin: 0 auto;
  margin-bottom: 30px;
  .upper {
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
`;
export const HairshopName = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 10px 0 2px 10px;
  color: #333;
  font-weight: 700;
  font-size: 18px;
  align-items: center;
  letter-spacing: 1px;
  .icon {
    margin: 4px;
    width: 24px;
    height: 24px;
  }
`;
export const ReserveInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: #666;
  font-size: 14px;
  box-shadow: 0 2px 10px rgba(50, 50, 50, 0.1);
  border-radius: 10px;
  .info {
    margin: 0 24px;
    display: flex;
    padding: 5px 5px;
    border-bottom: 1px solid #ececec;
  }
  .date {
    padding: 0 10px;
  }
  .time {
    padding: 0 10px;
  }
  .cut {
    min-width: 120px;
    margin-left: 20px;
    padding: 10px 20px;
  }
  .dog {
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .option {
    display: flex;
  }
`;
export const Button = styled.button`
  font-size: 14px;
  padding: 0 2px;
  width: 70px;
  height: 30px;
  margin-bottom: 6px;
  margin-right: 10px;
  border-radius: 5px;
  border: none;
  padding: 2px;
  background-color: #6495ed;
  color: white;
  &:hover {
    opacity: 0.5;
  }
  &:disabled {
    background-color: #f2f4f7;
    color: gray;
    border: none;
    cursor: default;
    span {
      color: #ccc;
    }
  }
  &:hover {
    opacity: 1;
  }
`;
export const ModalWrap = styled.div`
  width: 500px;
  height: 200px;
  border: 1px solid black;
  border-radius: 5px;
  text-align: center;
  top: 30%;
  background-color: white;
  position: fixed;
  p {
    font-size: 1.5rem;
  }
  button {
    background-color: white;
    width: 70px;
    border: 1px solid black;
    border-radius: 5px;
    padding: 3px;
  }
`;

export const Container = styled.div`
  width: 700px;
  height: 100%;
  margin-top: 30px;
  line-height: normal;
`;

export const ContentBox = styled.div`
  height: 100%;
  margin: 0 auto;
  display: flex;
`;

export const Content = styled.div`
  float: left;
  width: 100%;
  padding: 0 29px 40px;
`;

export const TitleBox = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
`;

export const Title = styled.h2`
  float: left;
  color: #333;
  font-size: 22px;
  line-height: 30px;
  width: 100%;
`;
