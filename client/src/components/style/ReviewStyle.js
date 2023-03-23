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
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  div {
    width: 300px;
    text-align: center;
    text-decoration: none;
  }
  .nav-link {
    text-decoration: none;
    color: #333;
  }
  .nav-link.active {
    color: cornflowerblue;
  }
`;
