import React from 'react';

export const ContextApp = React.createContext();

export const initialState = {
  events: {},
};

export const eventReducer = (state, action) => {
  console.log('state = ', state);
  console.log('action = ', action);
  switch (action.type) {
    case 'addEvent':
    case 'removeEvent':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
