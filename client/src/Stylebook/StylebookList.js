import React from 'react'
import * as S from './SBStyle'
import StylebookItem from './StylebookItem';

export default function StylebookList() {
  const styles = [...Array(9).keys()]
  return (
   <S.Container>
    {/* {styles.map((style) => (
      <StylebookItem key={style} src={`https://source.unsplash.com/random/${style}`} />
    ))} */}
        
   </S.Container>
  )
}

