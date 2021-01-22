import React, { useReducer } from 'react';
import { ContextApp, initialState, eventReducer } from './store/reduser';
import Calendar from './components/Calendar';

function App() {
  const [state, dispatch] = useReducer(eventReducer, initialState);
  return (
    <ContextApp.Provider value={{ dispatch, state }}>
      <Calendar />
    </ContextApp.Provider>
  );
}

export default App;
