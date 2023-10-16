import { ContactsForm } from './ContactsForm/ContactsForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { onFilterChange } from './redux/phoneBookReducer';
import { useEffect } from 'react';
import {
  requestAddContactThunk,
  requestDeleteContactThunk,
  requestPhoneBookThunk,
} from './redux/thunks';
import {
  selectContacts,
  selectFilter,
  selectIsLoading,
} from './redux/selectors';
import Loader from './Loader/Loader';

export function App() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestPhoneBookThunk());
  }, [dispatch]);

  const onFilter = event => {
    const inputValue = event.target.value;
    dispatch(onFilterChange(inputValue));
  };

  const onDelete = id => {
    dispatch(requestDeleteContactThunk(id));
  };

  const handleFormSubmit = ({ name, phone }) => {
    const hasDuplicateContacts = contacts.some(
      contact => contact.name === name && contact.phone === phone
    );
    if (hasDuplicateContacts) {
      alert(`"${name}" is already in contacts!`);
      return;
    }
    dispatch(requestAddContactThunk({ name, phone, id: nanoid() }));
  };

  const filteredContactsByName = contacts.filter(contact => {
    return (
      contact.name.toLowerCase().includes(filter.trim().toLowerCase()) ||
      contact.phone.includes(filter)
    );
  });

  return (
    <div className="container">
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <ContactsForm onSubmit={handleFormSubmit} />
          <Filter label="Name" type="text" onChange={onFilter} />
          <ContactList
            contacts={filteredContactsByName}
            onDeleteContact={onDelete}
          />
        </div>
      )}
    </div>
  );
}
