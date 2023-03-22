import styled from 'styled-components';

//Stylebook
export const StylebookWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  top: 0px;
`;
//List
export const Container = styled.div`
  padding: 2rem 10rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  // border-top: 1px solid #ddd;
`;

//Item
export const ItemWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  border: 1px solid #ddd;
  position: relative;
`;

export const ItemImage = styled.div`
  width: 100%;
  height: 363px;
  position: relative;
  cursor: pointer;
  line-height: 0;

  .image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
  }
`;

export const Itembar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  background: rgba(0, 0, 0, 0.5);

  /* typographic styles */
  color: white;
  font-size: 1.5em;
  font-weight: bold;
  text-decoration: none;

  /* position the text centrally*/
  display: flex;
  align-items: center;
  justify-content: center;

  opacity: 0;
  transition: opacity 0.5s;

  &:hover {
    opacity: 1;
    transition: opacity 0.5s;
  }

  .icon {
    margin: 0px 20px;
    font-size: 50px;
    color: white;
  }

  .icon:hover {
    color: #ff7675;
  }
`;

export const Topcontainer = styled.div`
  position: fixed;
  right: 5%;
  bottom: 5%;
  z-index: 1;
  cursor: pointer;
  .icon {
    color: cornflowerblue;
    font-size: 2rem;
    transition: 0.5s;
  }
  .icon:hover {
    opacity: 0.5;
    transition: 0.5s;
  }
`;

export const StyleScrollArea = styled.div`
  height: 100vh;
  overflow-y: auto;
`;
