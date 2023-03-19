import * as S from '../style/CalenderStyle';
import { useState } from 'react';
import moment from 'moment/moment';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';

function Calender() {
  const [value, onChange] = useState(new Date());
  const [selectTime, setSelectTime] = useState('');
  const [isOpen, setIsopen] = useState(true);
  const formatDate = moment(value).format('YYYY-MM-DD');
  const DisplayDate = moment(value).format('YYYY년 MM월 DD일 dddd');
  console.log(formatDate);

  const sampleDate = [
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
  ];

  return (
    <>
      {/* 캘린더 */}
      <S.CalenderContainer>
        <S.StyledCalendar onChange={onChange} value={value} />
      </S.CalenderContainer>
      {/* 타임 테이블*/}
      <S.CalenderContainer>
        <S.TimeContainer>
          <S.DateContainer>
            <S.DateTitle>날짜</S.DateTitle>
            <S.SelectDate>{DisplayDate}</S.SelectDate>
          </S.DateContainer>
          <S.DateContainer className="time" onClick={() => setIsopen(!isOpen)}>
            <S.DateTitle>시간</S.DateTitle>
            <S.SelectTime className={selectTime ? 'selected' : ''}>
              {selectTime ? selectTime : '시간을 선택해주세요.'}
            </S.SelectTime>
            {isOpen ? <SlArrowUp /> : <SlArrowDown />}
          </S.DateContainer>
          {isOpen ? (
            <S.DateContainer>
              <S.TableContainer>
                <S.TableList>
                  {sampleDate.map((time, idx) => (
                    <S.TimeItem key={idx}>
                      <S.TimeButton
                        onClick={() => {
                          setSelectTime(time);
                          setIsopen(false);
                        }}>
                        {time}
                      </S.TimeButton>
                    </S.TimeItem>
                  ))}
                </S.TableList>
              </S.TableContainer>
            </S.DateContainer>
          ) : null}
        </S.TimeContainer>
      </S.CalenderContainer>
    </>
  );
}

export default Calender;
