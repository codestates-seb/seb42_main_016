import * as S from '../style/CalenderStyle';
import { useState } from 'react';
import moment from 'moment/moment';
import { SlArrowDown } from 'react-icons/sl';

function Calender() {
  const [value, onChange] = useState(new Date());
  const formatDate = moment(value).format('YYYY-MM-DD');
  const DisplayDate = moment(value).format('YYYY년 MM월 DD일 dddd');
  console.log(formatDate);

  return (
    <>
      <S.CalenderContainer>
        <S.StyledCalendar onChange={onChange} value={value} />
      </S.CalenderContainer>

      <S.CalenderContainer>
        <S.TimeContainer>
          <S.DateContainer>
            <S.DateTitle>날짜</S.DateTitle>
            <S.SelectDate>{DisplayDate}</S.SelectDate>
          </S.DateContainer>
          <S.DateContainer className="time">
            <S.DateTitle>시간</S.DateTitle>
            <S.SelectDate>시간을 선택해주세요.</S.SelectDate>
            <SlArrowDown />
          </S.DateContainer>
        </S.TimeContainer>
      </S.CalenderContainer>
    </>
  );
}

export default Calender;
