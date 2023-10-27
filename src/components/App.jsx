import React, { useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactList';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactsList />
      </div>
    </div>
  );
}
