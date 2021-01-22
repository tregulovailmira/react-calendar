import React from 'react';
import { useField } from 'formik';
import styles from './Input.module.sass';
import cx from 'classnames';

const Input = ({ stylesClasses: { container } = {}, ...props }) => {
  const [field] = useField(props);
  const { inputRef } = props;
  const inputStyles = cx(styles.input, container);
  return (
    <>
      <label>
        <input {...field} {...props} className={inputStyles} ref={inputRef} />
      </label>
    </>
  );
};

export default Input;
