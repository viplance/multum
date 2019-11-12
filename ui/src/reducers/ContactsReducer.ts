import { Contact } from '../interfaces/contact';

const contacts = (state: Contact[] = [], action: any ) => {
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
      return state = [
          { id: '1', name: 'User1' },
          { id: '2', name: 'User2' },
      ];
  }
};

export default contacts;
