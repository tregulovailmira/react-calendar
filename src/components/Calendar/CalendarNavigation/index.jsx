import React from 'react';
import NavigationButton from './NavigationButton';
import { format, sub, add } from 'date-fns';
import { mdiCalendarMonthOutline } from '@mdi/js';
import Icon from '@mdi/react';

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
    <div>
      <NavigationButton onClick={setPrevMonth}>{prevMonth}</NavigationButton>
      <div>{selectMonth}</div>
      <NavigationButton onClick={setCurrentMonth}>
        <Icon path={mdiCalendarMonthOutline} size={1} />
      </NavigationButton>
      <NavigationButton onClick={setNextMonth}>{nextMonth}</NavigationButton>
    </div>
  );
};

export default CalendarNavigation;
