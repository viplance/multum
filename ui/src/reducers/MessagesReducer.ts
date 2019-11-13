import { Message } from '../interfaces/message';

const defaultState = [
  { id: '1', text: 'Some message text', from: 'User1', to: 'User2' },
  { id: '2', text: 'Some message text', from: 'User2', to: 'User1' },
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
