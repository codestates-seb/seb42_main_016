import React from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { BiCut } from 'react-icons/bi'
import * as S from './style/SBStyle'

export default function StylebookItem({src}) {
  return (
   <S.ItemWrap>
    <S.ItemImage >
    <div className="image" style={{ backgroundImage: `url(${src})` }}></div>
    </S.ItemImage>
    <S.Itembar>
        <AiOutlineHeart className='icon'/>
        <BiCut className='icon'/>
    </S.Itembar>
   </S.ItemWrap>
  )
}

