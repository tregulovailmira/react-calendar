import React, { useState } from 'react';
import CurrentDay from './CurrentDate';
import Month from './Month';
import { startOfMonth, endOfMonth, add, sub } from 'date-fns';

const Calendar = () => {
  const [selectedDay, setSelectedDay] = useState(new Date());
  const [selectedMonth, setSelectedMonth] = useState(startOfMonth(new Date()));
  const [currentDay, setCurrentDay] = useState(new Date());
  const [start, setStart] = useState(startOfMonth(new Date()));

  const setSelectedDayHandler = (value) => {
    setSelectedDay(value);
  };

  const setMonth = (isNext) => {
    if (isNext) {
      setSelectedMonth(add(selectedMonth, { months: 1 }));
    } else {
      setSelectedMonth(sub(selectedMonth, { months: 1 }));
    }
  };

  return (
    <article>
      <CurrentDay currentDay={currentDay} />
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
