import styled from 'styled-components';
import 'react-calendar/dist/Calendar.css';

export const CalenderContainer = styled.div`
  width: 100%;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;

  /* 캘린더 전체 스타일 */
  .react-calendar {
    border: 1px solid #ececec;
    font-size: 26px;
    min-width: 500px;
    height: 475.75px;
    border-radius: 5px;
    box-shadow: 2px 2px 10px rgba(50, 50, 50, 0.1);
  }

  .react-calendar__month-view__weekdays__weekday {
    abbr[title] {
      text-decoration: none;
    }
  }

  /* 날짜 선택 스타일 */
  .react-calendar__tile {
    font-size: 16px;
    border: none;
    :disabled {
      color: #666;
      cursor: default;
    }
  }

  .react-calendar__tile--now {
    background: transparent;
  }

  .react-calendar__tile--active,
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus,
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: #74b9ff;
    color: white;
  }

  /* 달력의 헤더 스타일 */
  .react-calendar__navigation {
    color: cornflowerblue;
    font-weight: bold;
    height: 50px;
    font-size: 22px;
    border-radius: 5px 5px 0 0;
    margin-bottom: 0;
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
    pointer-events: none;
    :enabled:hover {
      background-color: transparent;
    }
  }

  .react-calendar__navigation__prev-button {
    border-radius: 5px 0 0 0;
    :disabled {
      background-color: transparent;
      cursor: default;
    }
    :enabled:hover,
    :enabled:focus {
      background-color: transparent;
    }
  }

  .react-calendar__navigation__next-button {
    border-radius: 0 5px 0 0;
    :disabled {
      background-color: transparent;
      cursor: default;
    }
    :enabled:hover,
    :enabled:focus {
      background-color: transparent;
    }
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
`;

export const SelectDate = styled.span`
  padding-right: 20px;
  color: #333;
  font-size: 16px;
  font-weight: 600;
  padding: 20px 0 17px;
  text-align: left;
`;

export const SelectTime = styled.span`
  padding-right: 20px;
  color: #989898;
  font-size: 16px;
  font-weight: 600;
  padding: 20px 0 17px;
  text-align: left;
  &.selected {
    color: #333;
  }
`;

export const TableContainer = styled.div`
  padding-top: 15px;
  width: 90%;
  padding-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const TableList = styled.ul`
  width: 100%;
  padding-left: 0px;
  margin: 0 auto;
`;

export const TimeItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  float: left;
  width: 25%;
  margin-bottom: 5px;
  margin-top: 5px;
  padding: 0;
`;

export const TimeButton = styled.button`
  display: block;
  font-size: 16px;
  padding: 10px 5px;
  text-align: center;
  border: 1px solid cornflowerblue;
  background-color: transparent;
  color: cornflowerblue;
  border-radius: 3px;
  width: 90%;
  :disabled {
    border: 1px solid #e2e5e8;
    background-color: #f4f7f8;
    color: #ccc;
    cursor: default;
  }
`;
