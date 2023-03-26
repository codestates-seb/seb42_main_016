import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

//review
export const Container = styled.div`
  border: 1px solid #ddd;
  padding: 30px;
  border-radius: 1rem;
  height: 100%;
`;
//Tab
export const TabWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 40px;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
  font-size: 20px;
  max-width: 700px;
`;

export const NavLinkReview = styled(NavLink)`
  width: 300px;
  text-align: center;
  text-decoration: none;
  color: #888;
  font-weight: 500;

  &.active {
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
