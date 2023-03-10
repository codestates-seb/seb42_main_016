import React from 'react'
import StylebookList from '../components/StylebookList' 
import * as S from '../components/style/SBStyle'
import TopButton from '../components/TopButton'


export default function Stylebook() {
  return (
    <S.StylebookWrap>
    <StylebookList/>
    <TopButton/>
    </S.StylebookWrap>
  )
}

