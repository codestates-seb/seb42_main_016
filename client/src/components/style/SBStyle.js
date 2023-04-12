import styled from 'styled-components';

//Stylebook
export const StylebookWrap = styled.div`
  position: relative;
  max-width: 1500px;
  width: 100%;
  height: 100%;
  top: 0px;
  margin: 0 auto;
`;
//List
export const Container = styled.div`
  padding: 2rem 10rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;

//Item
export const ItemWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

export const ItemImage = styled.div`
  width: 363px;
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

export const LikeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 10px;
  font-weight: 400;
  .icon {
    margin-right: 5px;
  }
`;

export const CommentWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 81px 0;
`;

export const CommentStyle = styled.header`
  white-space: nowrap;
`;

export const CommentTitle = styled.h1`
  font-size: 35px;
  font-weight: 700;
  text-align: center;
  color: cornflowerblue;
  letter-spacing: 2px;
  margin-bottom: 10px;
`;

export const CommentSub = styled.h2`
  font-size: 14px;
  text-align: center;
  color: #666;
  font-weight: 400;
  white-space: pre;
  line-height: normal;
  letter-spacing: 1.5px;
`;
