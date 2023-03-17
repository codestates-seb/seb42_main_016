import React from 'react';
import * as S from '../components/style/ReviewStyle';
import { Outlet } from 'react-router-dom';
import ReviewTab from '../components/mypageReview/ReviewTab';
export default function Myreview() {
  return (
    <S.Container>
      <ReviewTab />
      <Outlet></Outlet>
    </S.Container>
  );
}
