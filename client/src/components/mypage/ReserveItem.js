import React, { useState } from 'react'
import * as S from '../style/MyPageStyle'
import { IoIosCut } from 'react-icons/io' 

export default function ReserveItem() {
  let [modal, setModal] =useState(false)

  function CancelModal(){
    return(
      <S.ModalWrap>
      <p>예약을 취소하시겠습니까?</p>
      <div className='button'>
      <button>예</button>
      <button onClick={()=>setModal(false)}>아니오</button>
      </div>
      </S.ModalWrap>
    )
  }
  const Cancelreserve =() =>{
    
  }
  return (
   <S.RIWrap>
    <div className='upper'>
    <S.HairshopName><IoIosCut className='icon'/>미용실</S.HairshopName>
    <S.CancelButton onClick={()=>setModal(true)}>예약취소</S.CancelButton>
    </div>
    <S.ReserveInfo>
      <div className='info'>
        <div className='date'>2023.03.10</div>
        <div className='time'>2:00</div>
      </div>
        <div className='cut'>컷트</div>
    </S.ReserveInfo>
    {
      modal ? <CancelModal/> : null
   }
   </S.RIWrap>

  )
}



