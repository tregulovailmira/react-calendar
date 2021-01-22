import React from 'react';
import { useField } from 'formik';
import styles from './Input.module.sass';
import cx from 'classnames';

const Input = ({ stylesClasses: { container } = {}, ...props }) => {
  const [field] = useField(props);

  const inputStyles = cx(container, styles.inputContainer);

  return (
    <>
      <label className={inputStyles}>
        <input {...field} {...props} className={styles.input} />
      </label>
    </>
  );
};

export default Input;
