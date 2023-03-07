import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { inputHandlerAction } from 'redux/contactsSlice';
import { getNumber } from 'redux/selectors';
import css from './AddPhone.module.css';

export const AddPhone = () => {
  const dispatch = useDispatch();
  const number = useSelector(getNumber);

  const handleChange = event => {
    const payload = { name: event.target.name, value: event.target.value };
    dispatch(inputHandlerAction(payload));
  };

  return (
    <>
      <label htmlFor="number" className={css.number}>
        Number
      </label>
      <input
        onChange={handleChange}
        autoComplete="off"
        type="tel"
        name="number"
        placeholder="Enter number"
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
    </>
  );
};
