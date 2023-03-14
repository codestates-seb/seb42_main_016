import React, { useState } from 'react'
import * as S from '../style/MyPageStyle'
import { IoIosCut } from 'react-icons/io' 

export default function ReserveItem() {



  return (
   <S.RIWrap>
    <div className='upper'>
    <S.HairshopName><IoIosCut className='icon'/>미용실</S.HairshopName>
    <S.CancelButton >리뷰 작성</S.CancelButton>
    </div>
    <S.ReserveInfo>
      <div className='info'>
        <div className='date'>2023.03.10</div>
        <div className='time'>2:00</div>
      </div>
        <div className='cut'>컷트</div>
    </S.ReserveInfo>

   </S.RIWrap>

  )
}



