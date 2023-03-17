import React from 'react'
import * as S from '../style/SBStyle'
import { BsArrowUpCircle } from 'react-icons/bs'

export default function TopButton() {
    const handleClick = () => {
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        })
    }
  return (
   <S.Topcontainer>
    <BsArrowUpCircle className='icon' onClick={handleClick} />
   </S.Topcontainer>
  )
}
