import { useContext } from 'react';
import { format } from 'date-fns';
import { ContextApp } from '../../store/reduser';

const useEvents = (selectedDay) => {
  const {
    state: { events },
    state,
    dispatch,
  } = useContext(ContextApp);
  const eventDayKey = format(selectedDay, 'dd MM yyyy');

  const addEvent = (eventBody) => {
    const event = {
      id: Date.now(),
      eventBody,
    };

    if (!events[eventDayKey]) {
      events[eventDayKey] = [];
    }

    events[eventDayKey].push(event);

    dispatch({
      type: 'addEvent',
      payload: {
        events,
      },
    });
  };

  const removeEvent = (eventID) => {
    events[eventDayKey] = events[eventDayKey].filter(
      ({ id }) => id !== eventID
    );

    dispatch({
      type: 'removeEvent',
      payload: {
        events,
      },
    });
  };

  return [events[eventDayKey], addEvent, removeEvent];
};

export default useEvents;
