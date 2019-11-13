import { Message } from '../interfaces';

const defaultState = [
  { id: '1', text: 'Some message text 1', from: 'User1', to: 'User2' },
  { id: '2', text: 'Some message text 2', from: 'User2', to: 'User1' },
  { id: '3', text: 'Some message text 3', from: 'User1', to: 'User2' },
  { id: '4', text: 'Some message text 4', from: 'User2', to: 'User1' },
  { id: '5', text: 'Some message text 5', from: 'User2', to: 'User1' },
];

const messages = (state: Message[] = defaultState, action: any ) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          from: action.payload.from,
          to: action.payload.to,
        }
      ];
    default:
      return state;
  }
};

export default messages;
