import styled from "styled-components";

//MyPage
export const MypageContainer = styled.div`
    position: relative;
    top:120px;
    width:100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    border-top: 1px solid #ddd;
    /* padding: 0 12rem; */
`

//Sidebar
export const SidebarContainer = styled.div`
    border-right: 1px solid #ddd;
    width: 12rem;
    position: relative;
    
    h3{
        text-align: left;
        padding-left: 12px;
    }
    ul{
        padding-left: 12px;
    }
    li{
        font-size: 1.3rem; 
    }
    .nav-link{
        text-decoration: none;
        color:black;
        
    }
    .nav-link.active{
        font-weight: bold;
    }
`



//Mypage_Section
export const Section= styled.div`
    position: relative;
    width: 850px;
    padding: 10px;
 
`

//ReserveList
export const RLWrap = styled.div`
    border: 1px solid #ddd;
    padding: 30px;
    border-radius: 1rem;
    height: 100%;
    h4{
        margin-top: 2px;
        border-bottom: 1px solid #ddd;
        
    }
`

//ReserveItem
export const RIWrap = styled.div`
    width:700px;
    height:200px;
    /* border: 1px solid #ddd; */
    .upper{
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }

    `
export const HairshopName = styled.div`
    display: flex;
    justify-content: flex-start;
    padding: 10px 0 2px 10px;
    font-size: 1.3rem;
    font-weight: bold;
    .icon{
        margin: 4px;
        width:30px;
        height: 30px;
    }
`
export const ReserveInfo = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1.1rem;
    border: 1px solid #ddd;
    border-radius: 10px;
    .info{
        margin: 0 24px;
        display: flex;
        padding: 5px 5px;
        border-bottom: 1px solid #ddd;
    }
    .date{
        padding: 0 10px;
    }
    .time{
        padding: 0 10px;
    }
    .cut{
        margin: 0 24px;
        padding: 10px 20px;
    }
`
export const CancelButton = styled.button`
    font-size: 1rem;
    padding: 0 2px;
    width: 80px;
    height: 25px;
    margin-bottom: 6px;
    margin-right: 10px;
    border: 1px solid #ddd;
    border-radius: 3px;
    padding: 2px;
    :hover{
        background-color: white;
    }
`
export const ModalWrap = styled.div`
     width:500px;
     height: 200px;
     border: 1px solid black;
     border-radius: 5px;
     text-align: center;
     top:30%;
     background-color: white;
     position: fixed;
     p{
        font-size: 1.5rem;
     }
     button{
        background-color: white;
        width: 70px;
        border: 1px solid black;
        border-radius: 5px;
        padding: 3px;
     }
`