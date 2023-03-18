import styled from 'styled-components';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export const CalenderContainer = styled.div`
  width: 100%;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
`;

export const StyledCalendar = styled(Calendar)`
  /* 캘린더 전체 스타일 */
  font-size: 26px;
  min-width: 500px;
  height: 500px;
  border-radius: 5px;
  border-color: #ececec;
  box-shadow: 2px 2px 10px rgba(50, 50, 50, 0.1);

  /* 날짜 선택 스타일 */
  .react-calendar__tile {
    font-size: 16px;
    border: none;
    &:hover {
      background: #74b9ff;
      color: white;
    }
    &:focus {
      background: #74b9ff;
      color: white;
    }
  }

  .react-calendar__tile--active {
    background: #74b9ff;
    color: white;
  }

  .react-calendar__tile--now {
    background: #ececec;
    color: #666;
    &:hover {
      background: #74b9ff;
      color: white;
    }
  }

  /* 달력의 헤더 스타일 */
  .react-calendar__navigation {
    color: cornflowerblue;
    font-weight: bold;
    height: 50px;
    font-size: 22px;
    border-radius: 5px 5px 0 0;
  }

  /* 이전/다음 버튼 스타일 */
  .react-calendar__navigation__arrow {
    color: cornflowerblue;
    font-size: 22px;
    font-weight: 500;
  }
  .react-calendar__navigation__label {
    color: cornflowerblue;
    font-size: 18px;
    font-weight: 500;
  }

  .react-calendar__navigation__prev2-button {
    border-radius: 5px 0 0 0;
  }

  .react-calendar__navigation__next2-button {
    border-radius: 0 5px 0 0;
  }

  .react-calendar__month-view__days {
    height: 377px;
  }
`;

export const TimeContainer = styled.div`
  width: 500px;
`;

export const DateContainer = styled.div`
  position: relative;
  width: 100%;
  color: #333;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  align-items: center;
  &.time {
    cursor: pointer;
  }
  svg {
    color: #8f8f8f;
    position: absolute;
    right: 0;
    top: 20px;
    font-size: 18px;
  }
`;

export const DateTitle = styled.span`
  padding-right: 20px;
  color: #333;
  white-space: nowrap;
  padding: 20px 20px 17px 0px;
  text-align: left;
  //#989898
`;

export const SelectDate = styled.span`
  padding-right: 20px;
  color: #333;
  font-size: 16px;
  font-weight: 600;
  padding: 20px 0 17px;
  text-align: left;
`;
