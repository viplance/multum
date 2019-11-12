import { combineReducers } from 'redux';
import contacts from './ContactsReducer';
import messages from './MessagesReducer';

export default combineReducers({
  contacts,
  messages
});
