import React from 'react';
import styles from './NavigationButton.module.sass';
import cx from 'classnames';

const NavigationButton = ({ onClick, children, container, title }) => {
  const buttonStyles = cx(container, styles.buttonClasses);

  return <button onClick={onClick} className={buttonStyles} title={title}>{children}</button>;
};

export default NavigationButton;
