import React, { useState } from 'react';
import CurrentDay from './CurrentDate';
import Month from './Month';
import CalendarNavigation from './CalendarNavigation';
import { startOfMonth, add, sub } from 'date-fns';
import styles from './Calendar.module.sass';

const Calendar = () => {
  const [selectedDay, setSelectedDay] = useState(new Date());
  const [selectedMonth, setSelectedMonth] = useState(startOfMonth(new Date()));
  // const [currentDay, setCurrentDay] = useState(new Date());
  const currentDay = new Date();

  const setSelectedDayHandler = (value) => {
    setSelectedDay(value);
  };

  const setMonth = (month) => {
    switch (month) {
      case 'next':
        setSelectedMonth(add(selectedMonth, { months: 1 }));
        break;
      case 'prev':
        setSelectedMonth(sub(selectedMonth, { months: 1 }));
        break;
      case 'current':
        setSelectedMonth(startOfMonth(new Date()));
        break;
    }
  };

  return (
    <article className={styles.calendarWrapper}>
      <div className={styles.headerWrapper}>
        <CurrentDay currentDay={currentDay} />
        <CalendarNavigation selectedMonth={selectedMonth} setMonth={setMonth} />
      </div>
      <Month
        setSelectedDayHandler={setSelectedDayHandler}
        selectedDay={selectedDay}
        selectedMonth={selectedMonth}
        currentDay={currentDay}
      />
    </article>
  );
};

export default Calendar;
