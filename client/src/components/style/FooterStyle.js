import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const Footer = styled.footer`
  padding: 18px 0 65px;
  border-top: 1px solid #ececec;
`;

export const FooterContent = styled.div`
  width: 90%;
  max-width: 1060px;
  margin: 0 auto 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavLinkLogo = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 43px;
  width: 113px;
  color: #3a3a3a;

  cursor: pointer;
  text-decoration: none;
  img {
    width: 100px;
  }
`;

export const NavLinkWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const NavService = styled(NavLink)`
  font-size: 15px;
  color: #3a3a3a;
  font-weight: 500;
  line-height: 2.6;
  margin-right: 45px;
  white-space: nowrap;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    opacity: 0.8;
  }
`;

export const SnsWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 150px;
  height: 50px;
  justify-content: space-between;
`;

export const SnsLink = styled(Link)`
  color: #3a3a3a;
  position: relative;
  display: block;
  float: left;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    color: cornflowerblue;
  }
`;

export const FooterDetail = styled.div`
  border-top: 1px solid #ececec;
  padding-top: 25px;
  width: 90%;
  max-width: 1060px;
  margin: 0 auto 18px;
  display: flex;
`;

export const FooterText = styled.p`
  float: left;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.67em;
  color: #767676;
  width: calc(100% - 290px);
  margin-right: 40px;
`;
