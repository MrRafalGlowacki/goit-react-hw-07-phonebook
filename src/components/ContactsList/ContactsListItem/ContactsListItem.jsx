import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactsListItem.module.css';

export const ContactsListItem = ({ id, name, number, onContactRemove }) => {
  return (
    <li key={id} className={css.item}>
      <span className={css.name}>
        {name}: {number}
      </span>{' '}
      <button
        type="button"
        className={css.button}
        onClick={() => onContactRemove(id, name)}
      >
        X
      </button>
    </li>
  );
};

ContactsListItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  number: PropTypes.string,
  onContactRemove: PropTypes.func,
};
