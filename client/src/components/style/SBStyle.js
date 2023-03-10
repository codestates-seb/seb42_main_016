import styled from 'styled-components';



//Stylebook
export const StylebookWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  top:120px;
`
//List
export const Container = styled.div`
    /* width: 100vw;
    height: 100vh; */
    padding: 2rem 12rem;
    display: grid;
    grid-template-columns:repeat(3,1fr);
    gap:2rem;
    border-top: 1px solid #ddd;
`;

//Item
export const ItemWrap = styled.div`
    width:100%;
    height: 24rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    border-radius: 1rem;
    border: 1px solid #ddd;

  :hover {
    background-color: rgba(247, 247, 247, 0.836);
    box-shadow: 3px 3px 3px #3f00c71a;
  }
`
export const ItemImage = styled.div`
  .image{
    width: 28rem;
    height: 22rem;
    background-size: cover; 
    background-position: center;
  }

`
export const Itembar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
  border-top: 1px solid #ddd;
  .icon {
    padding:5px 10px;
    font-size: 1.2rem;
  }
  .icon:hover{
    cursor: pointer;
  }

`

export const Topcontainer = styled.div`
  position: fixed;
  right: 5%;
  bottom: 5%;
  z-index: 1;
  .icon {
    font-size: 2rem;
  }
  .icon:hover{
    color: #ddd;
  }
`