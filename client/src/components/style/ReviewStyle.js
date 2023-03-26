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

//review item
export const RIWrap = styled.div`
  position: relative;
  width: 700px;
  height: 260px;
  padding: 10px;
  margin-bottom: 10px;
`;
export const Content = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;
export const Review = styled.div`
  display: flex;
`;
export const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 5px;
  padding: 5px;
  margin-right: 5px;
`;
export const HairshopInfo = styled.div`
  font-size: 20px;
  font-weight: 500;
  padding: 10px;
`;

export const Button = styled.button`
  width: 50px;
  height: 30px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  color: white;
  background-color: #6495ed;
  :hover {
    background-color: #aac5f5;
  }
`;

export const Photo = styled.image`
  img {
    width: 150px;
    height: 150px;
    border-radius: 5px 0px 0px 5px;
  }
`;
export const Text = styled.p`
  padding: 15px;
  position: relative;
  font-size: 1.1rem;
  width: 480px;
  height: 150px;
  border: 1px solid #ddd;
  margin: 0;
  border-radius: 0px 5px 5px 0px;
`;
