import React from 'react'
import * as S from '../components/style/MyPageStyle'
import ReserveItem from '../components/ReserveItem'

export default function ReserveList() {

  return (
    <S.RLWrap>
      <h4>예약 내역</h4>
      <ReserveItem/>
    
  
    </S.RLWrap>
  )
}
