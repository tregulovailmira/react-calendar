import React from 'react';
import cx from 'classnames';
import { getDate, isSameMonth, isSameDay, isWeekend } from 'date-fns';
import useEvents from '../../../../../hooks/Events';
import styles from './Day.module.sass';

const Day = ({
  selectedDay,
  day,
  currentDay,
  setSelectedDayHandler,
  selectedMonth,
}) => {
  const [eventsOfDay] = useEvents(day);
  const selectDay = () => {
    if (isSameMonth(selectedMonth, day)) {
      setSelectedDayHandler(day);
    }
  };

  const dayStylesClasses = cx(styles.dayWrapper, {
    [styles.anotherMonthDays]: !isSameMonth(selectedMonth, day),
    [styles.currentMonthDays]: isSameMonth(selectedMonth, day),
    [styles.weekend]: isWeekend(day),
    [styles.selectedDay]: isSameDay(selectedDay, day),
    [styles.currentDay]: isSameDay(currentDay, day),
    [styles.dayWithEvent]: eventsOfDay?.length,
  });

  return (
    <td onClick={selectDay} className={dayStylesClasses}>
      <p>{getDate(day)}</p>
    </td>
  );
};

export default Day;
