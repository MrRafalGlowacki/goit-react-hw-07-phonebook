import React, { useEffect } from 'react';
import { AddForm } from './AddForm/AddForm';
import { ContactList } from 'components/ContactsList/ContactsList';
import { useDispatch, useSelector } from 'react-redux';
import { setContactsAction } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';

export const App = () => {
  const contactsList = useSelector(getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      const savedContacts = JSON.parse(localStorage.getItem('contacts'));
      if (savedContacts && savedContacts.length > 0) {
        dispatch(setContactsAction(savedContacts));
      }
    } catch (error) {
      console.error('Error parsing saved contacts from localStorage:', error);
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contactsList));
  }, [contactsList]);

  return (
    <>
      <AddForm />
      <ContactList />
    </>
  );
};
