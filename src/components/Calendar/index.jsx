import React, { useState } from 'react';
import CurrentDay from './CurrentDate';
import Month from './Month';
import CalendarNavigation from './CalendarNavigation';
import { startOfMonth, add, sub } from 'date-fns';
import styles from './Calendar.module.sass';
import EventsList from './Events/EventsList';
import Button from '../fields/Button';

const Calendar = () => {
  const [selectedDay, setSelectedDay] = useState(new Date());
  const [selectedMonth, setSelectedMonth] = useState(startOfMonth(new Date()));
  const [isShowFormEvent, setIsShowFormEvent] = useState(false);
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

  const openAddEventForm = () => {
    setIsShowFormEvent(true);
  };

  const closeAddEventForm = () => {
    setIsShowFormEvent(false);
  };

  return (
    <article className={styles.wrapper}>
      <section>
        <div className={styles.headerWrapper}>
          <CurrentDay currentDay={currentDay} />
          <CalendarNavigation
            selectedMonth={selectedMonth}
            setMonth={setMonth}
          />
        </div>
        <Month
          setSelectedDayHandler={setSelectedDayHandler}
          selectedDay={selectedDay}
          selectedMonth={selectedMonth}
          currentDay={currentDay}
        />
      </section>
      <section>
        {!isShowFormEvent && (
          <Button onClick={openAddEventForm} container={styles.newEventButton}>
            New event
          </Button>
        )}
        <EventsList
          selectedDay={selectedDay}
          isShown={isShowFormEvent}
          closeForm={closeAddEventForm}
        />
      </section>
    </article>
  );
};

export default Calendar;
