import React from 'react';

const NavigationButton = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default NavigationButton;
