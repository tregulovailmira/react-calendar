import React from 'react';
import propTypes from 'prop-types';
import { format } from 'date-fns';

const CurrentDay = ({ currentDay }) => {
  return (
    <div>
      <div>{format(currentDay, 'iiii')}</div>
      <div>{format(currentDay, 'MMM')}</div>
      <div>{format(currentDay, 'd')}</div>
    </div>
  );
};

CurrentDay.propTypes = {
  currentDay: propTypes.instanceOf(Date).isRequired,
};

export default CurrentDay;
