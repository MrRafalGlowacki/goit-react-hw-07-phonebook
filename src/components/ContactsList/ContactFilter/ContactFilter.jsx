import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterAction } from 'redux/filtersSlice';
import { getFilter } from 'redux/selectors';
import css from './ContactFilter.module.css';

export const ContactFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChange = event => {
    const value = event.target.value;
    dispatch(setFilterAction(value));
  };

  return (
    <>
      <p className={css.filter}>Find contacts by name</p>
      <input
        className={css.filter}
        onChange={handleChange}
        autoComplete="off"
        type="text"
        name="filter"
        value={filter}
        placeholder="search..."
      />
    </>
  );
};
