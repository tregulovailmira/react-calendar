import React, { useMemo } from 'react';
import WeekDays from './WeekDays';
import Week from './Week';
import { startOfWeek, endOfMonth, add, format, isSameMonth } from 'date-fns';

const Month = (props) => {
  const { selectedMonth } = props;
  const getWeeks = useMemo(() => {
    let startDate = startOfWeek(selectedMonth);
    const weeks = [];
    do {
      const weekDates = [];

      for (let i = 0; i < 7; i++) {
        weekDates.push(startDate);
        startDate = add(startDate, { days: 1 });
      }

      weeks.push(weekDates);
    } while (isSameMonth(selectedMonth, startDate));
    return weeks;
  }, [endOfMonth(selectedMonth)]);

  return (
    <table>
      <WeekDays />
      <tbody>
        {getWeeks.map((week) => (
          <Week {...props} week={week} key={format(week[0], 'w')} />
        ))}
      </tbody>
    </table>
  );
};

export default Month;
