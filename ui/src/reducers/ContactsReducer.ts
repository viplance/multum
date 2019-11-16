import { ActionTypes } from '../actions';
import { Contact } from '../interfaces';
import { Action } from 'redux-actions';

const defaultState = [
  { id: 'User1', name: 'User1' },
  { id: 'User2', name: 'User2' },
];

const contacts = (state: Contact[] = defaultState, action: Action<any> ) => {
  switch (action.type) {
    case ActionTypes.AddContact:
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name
        }
      ];
    default:
      return state;
  }
};

export default contacts;
