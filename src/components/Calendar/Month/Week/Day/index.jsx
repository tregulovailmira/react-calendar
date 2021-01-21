import React from 'react';
import { getDate, isSameMonth, isSameDay, isWeekend } from 'date-fns';
import styles from './Day.module.sass';
import cx from 'classnames';

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

  const dayStylesClasses = cx(styles.dayWrapper, {
    [styles.anotherMonthDays]: !isSameMonth(selectedMonth, day),
    [styles.currentMonthDays]: isSameMonth(selectedMonth, day),
    [styles.selectedDay]: isSameDay(selectedDay, day),
    [styles.currentDay]: isSameDay(currentDay, day),
    [styles.weekend]: isWeekend(day)
  });

  return (
    <td onClick={selectDay} className={dayStylesClasses}>
      <p>{getDate(day)}</p>
    </td>
  );
};

export default Day;
