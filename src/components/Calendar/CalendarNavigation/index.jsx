import React from 'react';
import Button from '../../fields/Button';
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
  const selectMonth = format(selectedMonth, 'yyyy, MMMM');

  return (
    <div className={styles.navigationWrapper}>
      <div className={styles.month}>{selectMonth}</div>
      <div className={styles.navigationControls}>
        <Button onClick={setPrevMonth}>{prevMonth}</Button>
        <Button onClick={setCurrentMonth} title="Today">
          <Icon path={mdiCalendarMonthOutline} size={1} />
        </Button>
        <Button onClick={setNextMonth}>{nextMonth}</Button>
      </div>
    </div>
  );
};

export default CalendarNavigation;
