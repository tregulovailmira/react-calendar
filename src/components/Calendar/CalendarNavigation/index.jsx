import React from 'react';
import NavigationButton from './NavigationButton';
import { format, sub, add } from 'date-fns';
import { mdiCalendarMonthOutline } from '@mdi/js';
import Icon from '@mdi/react';
import styles from './CalendarNavigation.module.sass';

const CalendarNavigation = ({ selectedMonth, setMonth }) => {
  const setPrevMonth = () => {
    setMonth('prev');
  };
  const setNextMonth = () => {
    setMonth('next');
  };

  const setCurrentMonth = () => {
    setMonth('current');
  };

  const prevMonth = format(sub(selectedMonth, { months: 1 }), 'MMM');
  const nextMonth = format(add(selectedMonth, { months: 1 }), 'MMM');
  const selectMonth = format(selectedMonth, 'MMMM');

  return (
    <div className={styles.navigationWrapper}>
      <div className={styles.month}>{selectMonth}</div>
      <div className={styles.navigationControls}>
        <NavigationButton onClick={setPrevMonth}>{prevMonth}</NavigationButton>
        <NavigationButton onClick={setCurrentMonth} title="Today">
          <Icon path={mdiCalendarMonthOutline} size={1} />
        </NavigationButton>
        <NavigationButton onClick={setNextMonth}>{nextMonth}</NavigationButton>
      </div>
    </div>
  );
};

export default CalendarNavigation;
