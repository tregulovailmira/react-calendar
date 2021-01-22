import React from 'react';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';
import { Form, Formik } from 'formik';
import Input from '../../../fields/Input';
import Button from '../../../fields/Button';
import styles from './AddEventForm.module.sass';

const AddEventForm = ({ onSubmit, closeForm, isShown }) => {
  const initialValues = {
    event: '',
  };

  const onSubmitHandler = (values, formikBag) => {
    const { event } = values;
    if (event) {
      onSubmit(event);
      formikBag.resetForm();
      closeForm();
    }
  };

  return (
    isShown && (
      <Formik onSubmit={onSubmitHandler} initialValues={initialValues}>
        <Form className={styles.formWrapper}>
          <Input
            placeholder="Event of the day"
            name="event"
            label="event"
            className={styles.input}
          ></Input>
          <Button onClick={closeForm} container={styles.closeButton}>
            <Icon path={mdiClose} size={0.8} />
          </Button>
          <Button type="submit">ADD EVENT</Button>
        </Form>
      </Formik>
    )
  );
};

export default AddEventForm;
