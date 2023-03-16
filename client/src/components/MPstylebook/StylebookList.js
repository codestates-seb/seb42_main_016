import React from 'react'
import * as S from '../style/SBStyle'
import StylebookItem from './StylebookItem';

export default function StylebookList() {
  const styles = [...Array(3).keys()]
  return (
   <S.Container>
    {styles.map((style) => (
      <StylebookItem key={style} src={`https://source.unsplash.com/random/${style}`} />
    ))}
   </S.Container>
  )
}

