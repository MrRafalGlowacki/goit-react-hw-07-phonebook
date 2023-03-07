import React from 'react';
import css from './ContactsList.module.css';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { ContactsListItem } from './ContactsListItem/ContactsListItem';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContactAction } from 'redux/contactsSlice';

export const ContactList = () => {
  const contactsList = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const handleRemoveContact = (id, name) => {
    dispatch(deleteContactAction(id));
    alert(`${name} is removed from your contacts`);
  };
  const getFilteredList = () => {
    return contactsList.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const list = getFilteredList().map(contact => (
    <ContactsListItem
      key={contact.id}
      id={contact.id}
      name={contact.name}
      number={contact.number}
      onContactRemove={handleRemoveContact}
      filter={filter}
    />
  ));
  return (
    <>
      <h3 className={css.title}>Contacts</h3>
      {contactsList.length > 0 || (
        <div className={css.empty}>add some contacts</div>
      )}
      {contactsList.length > 0 && <ContactFilter />}
      {contactsList.length > 0 && <ul className={css.container}>{list}</ul>}
    </>
  );
};
