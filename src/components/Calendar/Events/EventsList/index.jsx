import React, { useEffect } from 'react';
import useEvents from '../../../../hooks/Events';
import Event from './Event';
import AddEventForm from '../AddEventForm';
import styles from './EventsList.module.sass';

const EventsList = ({ selectedDay, ...props }) => {
  const [eventsOfDay, addEvent, removeEvent] = useEvents(selectedDay);

  const renderEventsList = () => {
    return (
      Boolean(eventsOfDay?.length) && (
        <ul className={styles.eventsList}>
          {eventsOfDay.map((event) => {
            return (
              <Event key={event.id} event={event} removeEvent={removeEvent} />
            );
          })}
        </ul>
      )
    );
  };

  return (
    <div>
      <AddEventForm onSubmit={addEvent} {...props} />
      {renderEventsList()}
    </div>
  );
};

export default EventsList;
