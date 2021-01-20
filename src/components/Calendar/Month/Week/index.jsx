import React, { useMemo } from 'react';
import Day from './Day';
import { format } from 'date-fns';

const Week = ({ week, ...props }) => {
  //   const weekRender = useMemo(() => {
  //     return week.map((day) => (
  //       <Day {...props} day={day} key={format(day, 'w-d')} />
  //     ));
  //   }, [week, props]);

  return (
    <tr>
      {week.map((day) => (
        <Day {...props} day={day} key={format(day, 'w-d')} />
      ))}
    </tr>
  );
};

export default Week;
