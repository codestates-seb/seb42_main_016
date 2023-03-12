import React from 'react'
import StylebookList from '../components/stylebook/StylebookList' 
import * as S from '../components/style/SBStyle'
import TopButton from '../components/stylebook/TopButton'


export default function Stylebook() {
  return (
    <S.StylebookWrap>
    <StylebookList/>
    <TopButton/>
    </S.StylebookWrap>
  )
}

