import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
  position: sticky;
  width: 100%;
  top: 0;
  height: 55px;
  background-color: #fff;
  z-index: 1;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    padding-top: 10px;
    width: 80px;
  }
`;

export const Menu = styled.ul`
  text-align: center;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const List = styled.li`
  margin-left: 30px;
  float: left;
  .active {
    color: cornflowerblue;
  }
  &:hover {
    opacity: 0.8;
  }
`;

export const Login = styled.ul`
  margin-left: 45%;
  @media (max-width: 1200px) {
    margin-left: 0;
  }
`;

export const LinkStyle = styled(Link)`
  text-decoration: none;
  color: #333;
`;

export const NavLinkStyle = styled(NavLink)`
  text-decoration: none;
  color: #333;
`;

export const NavStyle = styled.nav`
  margin: 0 auto;
  height: 50px;
  position: relative;
  max-width: 1060px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  white-space: nowrap;
  @media (min-width: 1200px) {
    width: 70%;
  }
`;
