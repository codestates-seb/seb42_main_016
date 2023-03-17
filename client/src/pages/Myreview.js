<<<<<<< HEAD
import React, { useState,useEffect } from 'react'
import * as S from '../components/style/ReviewStyle'
import ReserveList from '../components/mypageReview/ReserveList'
import ReviewList from '../components/mypageReview/ReviewList'
import styled from 'styled-components'




export default function Myreview() {

  const [currentTab, setCurrentTab] = useState(0);
  const menuArr = [
    {name: '작성 가능한 리뷰', content: <ReserveList/>},
    {name: '작성한 리뷰', content: <ReviewList/>}
  ]
  const selectMenuHandler = (index) => {
    setCurrentTab(index);
  };
=======
import React, { useState, useEffect } from 'react';
import * as S from '../components/style/ReviewStyle';
// import ReserveList from '../components/mypageReview/ReserveList'
import ReviewList from '../components/mypageReview/ReviewList';
import styled from 'styled-components';
import AddReviewForm from '../components/mypageReview/AddReviewForm';

export default function Myreview() {
  // const [currentTab, setCurrentTab] = useState(0);
  // const menuArr = [
  //   {name: '작성 가능한 리뷰', content: <ReserveList/>},
  //   {name: '작성한 리뷰', content: <ReviewList/>}
  // ]
  // const selectMenuHandler = (index) => {
  //   setCurrentTab(index);
  // };
>>>>>>> fdc300fdd215dc2fd867093b17b8dbf719b1edda
  return (
    <S.Container>
      <TabMenu>
      {menuArr.map((ele, index) => {
            return (
              <li
                key={index}
                className={currentTab === index ? 'submenu focused' : 'submenu'}
                onClick={() => selectMenuHandler(index)}
              >
                {ele.name}
              </li>
            );
          })}
      </TabMenu>
          <div>
          {menuArr[currentTab].content}
          </div>
<<<<<<< HEAD
      
     
     
   </S.Container>
  )
=======
       */}
      <AddReviewForm />
      <ReviewList />
    </S.Container>
  );
>>>>>>> fdc300fdd215dc2fd867093b17b8dbf719b1edda
}

const TabMenu = styled.ul`
  color: black;
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  list-style: none;

  .submenu {
    width: 100%;
    padding: 10px;
    cursor: pointer;
    text-align: center;
    border: 1px solid #ddd;
    border-radius: 10px 10px 0 0;
  }

  .focused {
    background-color: #ddd;
    color: black;
    transition: 0.3s;
  }
`;
