import React from 'react';
import { getDate, isSameMonth, isSameDay } from 'date-fns';

const Day = ({
  selectedDay,
  day,
  currentDay,
  setSelectedDayHandler,
  selectedMonth,
}) => {
  const selectDay = () => {
    setSelectedDayHandler(day);
  };

  return (
    <td onClick={selectDay}>
      <p style={{ color: isSameMonth(selectedMonth, day) ? 'green' : 'gray', background: isSameDay(currentDay, day) ? 'red' : 'none' }}>
        {getDate(day)}
      </p>
    </td>
  );
};

export default Day;
