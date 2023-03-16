import React from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { BiCut } from 'react-icons/bi'
import * as S from '../style/SBStyle'
import { useNavigate } from "react-router-dom";

export default function StylebookItem({src}) {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate();
  }
  return (
   <S.ItemWrap>
    <S.ItemImage >
    <div className="image" style={{ backgroundImage: `url(${src})` }}></div>
    </S.ItemImage>
    <S.Itembar>
        <AiOutlineHeart className='icon'/>
        <BiCut className='icon' onClick={handleClick}/>
    </S.Itembar>
   </S.ItemWrap>
  )
}

