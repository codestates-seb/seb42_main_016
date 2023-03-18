import styled from 'styled-components';

export const TabContainer = styled.div`
  width: 100%;
  padding-top: 30px;
`;

export const TabBarBox = styled.div`
  margin: 0 auto;
  height: 50px;
  width: 60%;
  @media (max-width: 1000px) {
    width: 90%;
  }
`;

export const TabBar = styled.nav`
  color: #888;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
`;

export const Ul = styled.ul`
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  text-align: center;
  padding-left: 0;
  width: 100%;
`;

export const Li = styled.li`
  width: calc(30% / 3);
  min-width: 50px;
  height: 100%;
  padding: 10px;
  font-size: 20px;
  font-weight: 400;
  transition: 0.5s;
  white-space: nowrap;
  cursor: pointer;
  &.selected {
    color: #333;
    font-weight: 700;
    span {
      width: 100%;
      display: inline;
      box-shadow: inset 0 -10px 0 #badcff;
      transition: 0.5s;
    }
  }
`;
