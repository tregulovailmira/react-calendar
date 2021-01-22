import React from 'react';
import Icon from '@mdi/react';
import { mdiDeleteCircleOutline } from '@mdi/js';
import Button from '../../../../fields/Button';
import styles from './Event.module.sass';

const Event = (props) => {
  const {
    event: { id, eventBody },
    removeEvent,
  } = props;

  const deleteEvent = () => {
    removeEvent(id);
  };

  return (
    <li classname={styles.eventItem}>
      <div className={styles.eventBody}>{eventBody}</div>
      <Button onClick={deleteEvent}>
        <Icon path={mdiDeleteCircleOutline} size={1} />
      </Button>
    </li>
  );
};

export default Event;
