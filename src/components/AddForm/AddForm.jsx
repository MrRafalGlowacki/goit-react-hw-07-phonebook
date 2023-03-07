import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContactAction, inputHandlerAction } from 'redux/contactsSlice';
import { getContacts, getName, getNumber } from 'redux/selectors';
import css from './AddForm.module.css';
import { AddName } from './AddName/AddName';
import { AddPhone } from './AddPhone/AddPhone';

export const AddForm = () => {
  const name = useSelector(getName);
  const number = useSelector(getNumber);
  const contactsList = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const found = contactsList.find(contact => contact.name === name);
    if (found) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(
        addContactAction({
          name: name,
          number: number,
        })
      );
      dispatch(inputHandlerAction({ name: 'name', value: '' }));
      dispatch(inputHandlerAction({ name: 'number', value: '' }));
    }
  };

  return (
    <>
      <h2 className={css.title}>Phonebook</h2>
      <form className={css.form} onSubmit={handleSubmit}>
        <AddName />
        <AddPhone />
        <button type="submit" className={css.button}>
          Add contact
        </button>
      </form>
    </>
  );
};
