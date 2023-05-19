import { List, Item, DeleteButton } from './FollowerstList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from 'redux/fellowers/operations';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoading,
} from 'redux/fellowers/selectors';
import {
  notificationNoContact,
  notificationError,
} from 'components/Notifacation/Notifacation';
import { Loader } from 'components/Loader/Loader';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);
  const onError = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    const filtered = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    if (filtered.length === 0 && filter) {
      notificationNoContact();
    }
    return filtered;
  };

  const contactsToDisplay = filteredContacts();

  return (
    <List>
      {isLoading && <Loader />}
      {onError && notificationError()}
      {contactsToDisplay.map(({ id, name, phone }) => (
        <Item key={id}>
          {name}: {phone}
          <DeleteButton
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </DeleteButton>
        </Item>
      ))}
    </List>
  );
};
