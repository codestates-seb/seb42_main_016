import React from 'react'
import * as S from './style/MyPageStyle'
import { IoIosCut } from 'react-icons/io' 
export default function ReserveItem() {
  return (
   <S.RIWrap>
    <S.HairshopName><IoIosCut className='icon'/>미용실</S.HairshopName>
    <S.ReserveInfo>
      <div className='info'>
        <div className='date'>2023.03.10</div>
        <div className='time'>2:00</div>
      </div>
        <div className='cut'>컷트</div>
        {/* <S.CancelButton>예약취소</S.CancelButton> */}
    </S.ReserveInfo>
   </S.RIWrap>
  )
}

