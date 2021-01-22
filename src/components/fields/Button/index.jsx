import React from 'react';
import styles from './Button.module.sass';
import cx from 'classnames';

const Button = ({ onClick, children, container, title, type }) => {
  const buttonStyles = cx(container, styles.button);

  return (
    <button
      onClick={onClick}
      className={buttonStyles}
      title={title}
      type={type || 'button'}
    >
      {children}
    </button>
  );
};

export default Button;
