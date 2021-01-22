import React, { useEffect } from 'react';
import useEvents from '../../../../hooks/Events';
import Event from './Event';
import AddEventForm from '../AddEventForm';

const EventsList = ({ selectedDay, ...props }) => {
  const [eventsOfDay, addEvent, removeEvent] = useEvents(selectedDay);

  const renderEventsList = () => {
    return (
      Boolean(eventsOfDay?.length) && (
        <ul>
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
    <article>
      <AddEventForm onSubmit={addEvent} {...props} />
      {renderEventsList()}
    </article>
  );
};

export default EventsList;
