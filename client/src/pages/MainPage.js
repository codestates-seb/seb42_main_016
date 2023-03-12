import React from 'react'
import StylebookList from '../components/stylebook/StylebookList' 
import * as S from '../components/style/SBStyle'
import TopButton from '../components/stylebook/TopButton'


export default function MainPage() {
  return (
    <S.StylebookWrap>
      <S.BS>
        Best 스타일
      </S.BS>
    <StylebookList/>
    <TopButton/>
      <S.BS>
       추천 미용실
      </S.BS>
    </S.StylebookWrap>
      
  )
}

