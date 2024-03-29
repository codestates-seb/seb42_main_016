import * as S from '../style/CalenderStyle';
import { useState, useEffect } from 'react';
import moment from 'moment/moment';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';
import { useDispatch, useSelector } from 'react-redux';
import { setDate, setTime, selectBook } from '../../modules/redux/bookSlice';
import { TimeOption } from '../../utils/BookOption';
import Calendar from 'react-calendar';
import { RESERVATION_ENDPOINT } from '../../modules/endpoints';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

function Calender() {
  const dispatch = useDispatch();
  const { time } = useSelector(selectBook);
  const now = moment().toDate();
  const maxDate = moment().add(1, 'months').toDate();
  const [value, onChange] = useState(now);
  const [isOpen, setIsopen] = useState(true);
  const formatDate = moment(value).format('YYYY-MM-DD');
  const DisplayDate = moment(value).format('YYYY년 MM월 DD일 dddd');
  const { id } = useParams();
  const timeData = useFetch(`${RESERVATION_ENDPOINT}/${id}?select-date=${formatDate}`);
  const bookedTimes = timeData?.map((reservation) => reservation.reserveTime);

  const disabledTime = (time) => {
    const selectedDateTime = moment(value)
      .hour(time.split(':')[0])
      .minute(time.split(':')[1])
      .toDate();
    return selectedDateTime < now || bookedTimes?.includes(time);
  };

  useEffect(() => {
    dispatch(setDate(formatDate));
    dispatch(setTime(null));
  }, [dispatch, formatDate]);

  return (
    <>
      {/* 캘린더 */}
      <S.CalenderContainer>
        <Calendar
          onChange={onChange}
          value={value}
          next2Label={null}
          prev2Label={null}
          maxDate={maxDate}
          minDate={now}
        />
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
            <S.SelectTime className={time ? 'selected' : ''}>
              {time ? time : '시간을 선택해주세요.'}
            </S.SelectTime>
            {isOpen ? <SlArrowUp /> : <SlArrowDown />}
          </S.DateContainer>
          {isOpen ? (
            <S.DateContainer>
              <S.TableContainer>
                <S.TableList>
                  {TimeOption.map((time, idx) => (
                    <S.TimeItem key={idx}>
                      <S.TimeButton
                        disabled={disabledTime(time)}
                        onClick={() => {
                          dispatch(setTime(time));
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
