import css from './ContactList.module.css';
import { deleteContact } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';
import { itemsSelector, filterSelector } from 'redux/selectors';

export const ContactsList = () => {
  const contacts = useSelector(itemsSelector);
  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();

  const filteredContacts = useMemo(() => {
    if (filter === '') return contacts;

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [contacts, filter]);

  return (
    <div>
      <ul>
        {filteredContacts.map(contact => (
          <li key={contact.id}>
            <span>
              {contact.name}: {contact.number}
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
