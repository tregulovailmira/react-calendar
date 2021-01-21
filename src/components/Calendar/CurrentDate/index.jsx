import React from 'react';
import propTypes from 'prop-types';
import { format } from 'date-fns';
import styles from './CurrentDate.module.sass';

const CurrentDay = ({ currentDay }) => {
  return (
    <div className={styles.currentDate}>
      <div>{format(currentDay, 'iiii, MMM d')}</div>
    </div>
  );
};

CurrentDay.propTypes = {
  currentDay: propTypes.instanceOf(Date).isRequired,
};

export default CurrentDay;
