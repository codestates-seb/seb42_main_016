import axios from 'axios'
import React,{ useEffect, useState } from 'react'
import styled from 'styled-components'
import API from '../../modules/API'
import ReviewItem from './ReviewItem'



export default function ReviewList() {

  return (
    <Container>
    
      <button>등록</button>
      <button>수정</button>
      <button>삭제</button>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`