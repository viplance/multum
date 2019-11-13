import { Contact } from '../interfaces';

const defaultState = [
  { id: 'User1', name: 'User1' },
  { id: 'User2', name: 'User2' },
];

const contacts = (state: Contact[] = defaultState, action: any ) => {
  switch (action.type) {
    case 'ADD_CONTACT':
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
