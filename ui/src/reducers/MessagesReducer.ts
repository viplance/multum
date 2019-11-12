// import { Message } from '../interfaces';

const messages = (state: any[] = [], action: any ) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name
        }
      ];
    default:
      return state = [
          { id: '1', text: 'Some message text', from: 'User1', to: 'User2' },
          { id: '2', text: 'Some message text', from: 'User2', to: 'User1' },
      ];
  }
};

export default messages;
