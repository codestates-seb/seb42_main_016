import styled from 'styled-components';

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
  justify-content: space-evenly;
  border-bottom: 1px solid #ddd;
  .nav-link {
    text-decoration: none;
    color: black;
  }
  .nav-link.active {
    font-weight: bold;
  }
  div {
    padding: 10px;
  }
`;
