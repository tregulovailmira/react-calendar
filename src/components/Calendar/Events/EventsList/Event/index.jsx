import React from 'react';
import Icon from '@mdi/react';
import { mdiDeleteCircleOutline } from '@mdi/js';

import Button from '../../../../fields/Button';

const Event = (props) => {
  const {
    event: { id, eventBody },
    removeEvent,
  } = props;

  const deleteEvent = () => {
    removeEvent(id);
  };

  return (
    <li>
      <div>{eventBody}</div>
      <Button onClick={deleteEvent}>
        <Icon path={mdiDeleteCircleOutline} size={1} />
      </Button>
    </li>
  );
};

export default Event;
