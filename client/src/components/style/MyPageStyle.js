import styled from 'styled-components';

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
  .nav-link {
    text-decoration: none;
    color: #333;
  }
  .nav-link.active {
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
  width: 700px;
  height: 200px;
  .upper {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
`;
export const HairshopName = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 10px 0 2px 10px;
  font-size: 1.3rem;
  font-weight: bold;
  .icon {
    margin: 4px;
    width: 30px;
    height: 30px;
  }
`;
export const ReserveInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.1rem;
  border: 1px solid #ddd;
  border-radius: 10px;
  /* box-shadow: 0 2px 5px rgba(50, 50, 50, 0.1); */
  .info {
    margin: 0 24px;
    display: flex;
    padding: 5px 5px;
    border-bottom: 1px solid #ddd;
  }
  .date {
    padding: 0 10px;
  }
  .time {
    padding: 0 10px;
  }
  .cut {
    margin: 0 24px;
    padding: 10px 20px;
  }
  .dog {
    margin: 0 24px;
    padding: 10px 20px;
  }
  .option {
    display: flex;
  }
`;
export const Button = styled.button`
  font-size: 1rem;
  padding: 0 2px;
  width: 90px;
  height: 30px;
  margin-bottom: 6px;
  margin-right: 10px;
  border: 1px solid #ddd;
  border-radius: 3px;
  padding: 2px;
  background-color: #6495ed;
  color: white;
  :hover {
    background-color: #6893dd;
    color: #1b1e21;
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
  width: 100%;
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
