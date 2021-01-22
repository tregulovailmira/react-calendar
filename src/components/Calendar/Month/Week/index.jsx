import React from 'react';
import Day from './Day';
import { format } from 'date-fns';

const Week = ({ week, ...props }) => {
  return (
    <tr>
      {week.map((day) => (
        <Day {...props} day={day} key={format(day, 'w-d')} />
      ))}
    </tr>
  );
};

export default Week;
