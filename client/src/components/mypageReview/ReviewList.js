import React from 'react'
import styled from 'styled-components'
import ReviewItem from './ReviewItem'


export default function ReviewList() {
  
  return (
    <Container>
    <ReviewItem/>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`