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
  width: 600px;
  padding: 10px;
  box-shadow: 0 2px 10px rgba(50, 50, 50, 0.1);
  border-radius: 10px;
  margin: 0 auto;
  margin-bottom: 30px;
  .icon {
    margin-right: 4px;
    width: 24px;
    height: 24px;
  }
`;
export const Content = styled.div`
  padding: 10px;
`;
export const Review = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 5px;
  padding: 5px;
  margin-right: 10px;
`;
export const HairshopInfo = styled.div`
  color: #333;
  font-weight: 700;
  font-size: 18px;
  margin-top: 5px;
  margin-left: 18px;
  margin-bottom: 8px;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
`;
export const Photo = styled.image`
  img {
    width: 150px;
    height: 150px;
    border-radius: 5px 0px 0px 5px;
  }
`;

export const Text = styled.div`
  font-size: 16px;
  color: #333;
  width: 480px;
  height: 150px;
  padding: 10px;
  border: 1px solid #ececec;
  border-radius: 0px 5px 5px 0px;
`;
export const Button = styled.button`
  width: 50px;
  height: 30px;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: #6495ed;
  &:hover {
    opacity: 0.8;
  }
`;

export const FlexReview = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: 10px;
  margin-right: 10px;
`;
