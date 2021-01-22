import React from 'react';
import { Form, Formik } from 'formik';
import Input from '../../../fields/Input';
import Button from '../../../fields/Button';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

const AddEventForm = ({ onSubmit, closeForm, isShown }) => {
  const initialValues = {
    event: '',
  };

  const onSubmitHandler = (values, formikBag) => {
    const { event } = values;

    event && onSubmit(event);
    formikBag.resetForm();
  };

  return (
    isShown && (
      <Formik onSubmit={onSubmitHandler} initialValues={initialValues}>
        <Form>
          <Input
            placeholder="Event of the day"
            name="event"
            label="event"
          ></Input>
          <Button onClick={closeForm}>
            <Icon path={mdiClose} size={1} />
          </Button>
          <Button type="submit">ADD EVENT</Button>
        </Form>
      </Formik>
    )
  );
};

export default AddEventForm;
