import css from './ContactList.module.css';
import { deleteContact } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';
import { selectItems, selectFilter, selectError } from 'redux/selectors';

export const ContactsList = () => {
  const error = useSelector(selectError);
  const contacts = useSelector(selectItems);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const filteredContacts = useMemo(() => {
    if (filter === '') return contacts;

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [contacts, filter]);

  return (
    <div>
      {error && 'something went wrong'}
      <ul>
        {filteredContacts.map(contact => (
          <li key={contact.id}>
            <span>
              {contact.name}: {contact.number || contact.phone}
            </span>
            <button
              onClick={() => dispatch(deleteContact(contact.id))}
              className={css.buttonFilter}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
