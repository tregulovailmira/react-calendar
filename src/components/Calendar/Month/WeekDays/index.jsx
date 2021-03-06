import React from 'react';
import styles from './WeekDays.module.sass';

const WeekDays = () => {
  return (
    <thead className={styles.weekDaysWrapper}>
      <tr>
        <td>Sun</td>
        <td>Mon</td>
        <td>Tue</td>
        <td>Wed</td>
        <td>Thu</td>
        <td>Fri</td>
        <td>Sat</td>
      </tr>
    </thead>
  );
};

export default WeekDays;
