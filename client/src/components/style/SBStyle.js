import styled from 'styled-components';



//Stylebook
export const StylebookWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  top:0px;
`
//List
export const Container = styled.div`
    padding: 2rem 10rem;
    display: grid;
    grid-template-columns:repeat(3,1fr);
    gap:2rem;
    // border-top: 1px solid #ddd;
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
    /* background-color: rgba(247, 247, 247, 0.836);
    box-shadow: 3px 3px 3px #3f00c71a; */
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
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #ddd;
  .icon {
    margin:3px 7px;
    font-size: 1.3rem;
    color: gray;
  }
  
  .icon:hover{
    cursor: pointer;
    color: black;
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
    color: #ddd
  }
`

//Main

export const BS = styled.div`
    // margin-left: 10%;
    // margin-top: 30px;
    font-size: 25px;
    border-bottom: 4px solid black;
    // margin-right: 10%;
    margin: 30px 10% 0px 10%
`