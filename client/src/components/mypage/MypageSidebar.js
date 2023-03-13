import React from 'react'
import * as S from '../style/MyPageStyle'
import { NavLink } from 'react-router-dom'
export default function MypageSidebar() {
//style={{textDecoration: 'none', color: 'black'}}
  return (
    <S.SidebarContainer>
      <h3>마이페이지</h3>
    <ul>
        <li>
          <NavLink to='myinfo' className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'} >나의 정보</NavLink>
          </li>
        <li>
          <NavLink to='reserve' className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'} >예약 관리</NavLink>
          </li>
        <li>
          <NavLink to='review' className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}> 리뷰 관리</NavLink>
          </li>
        <li>
        <NavLink to='puppyinfo' className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>강아지 정보</NavLink>
        </li>
    </ul> 
    </S.SidebarContainer>
  )
}



 