import { useState } from 'react';

const useEvents = ({ day }) => {
  const [events, setEvents] = useState({});

  const addEvent = (eventBody) => {
    const event = {
      id: Date.now(),
      eventBody,
      isEnd: false,
    };

    events[day].push(event);

    setEvents(events);
  };

  const removeEvent = (eventID) => {
    events[day] = events[day].filter(({ id }) => id !== eventID);
    setEvents(events);
  };

  const toggleEvent = (eventID) => {
    events[day] = events[day].map((event) =>
      eventID !== event.id ? event : { ...event, isEnd: !event.isEnd }
    );
    setEvents(events);
  };

  const dayEvents = events[day] || [];

  return [dayEvents, addEvent, removeEvent, toggleEvent];
};

export default useEvents;
