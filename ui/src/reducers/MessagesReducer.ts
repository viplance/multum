import { Message } from '../interfaces';

const defaultState = [
  { id: '1', text: 'Some message text 1', from: 'User1', to: 'me', date: '27.11.2019 15:10' },
  { id: '2', text: 'Some message text 2', from: 'me', to: 'User1', date: '28.11.2019 15:15' },
  { id: '3', text: 'Some message text 3', from: 'me', to: 'User2', date: '29.11.2019 10:05' },
  { id: '4', text: 'Some message text 4', from: 'User2', to: 'me', date: '29.11.2019 12:15' },
  { id: '5', text: 'Some message text 5', from: 'User2', to: 'me', date: '29.11.2019 16:15' },
  { id: '6', text: 'Some message text 6', from: 'User1', to: 'me', date: '29.11.2019 15:10' },
  { id: '7', text: 'Some message text 7', from: 'me', to: 'User1', date: '29.11.2019 15:15' },
  { id: '8', text: 'Some message text 8', from: 'me', to: 'User2', date: '29.11.2019 10:05' },
  { id: '9', text: 'Some message text 9', from: 'User2', to: 'me', date: '29.11.2019 12:15' },
  { id: '10', text: 'Some message text 10', from: 'User2', to: 'me', date: '29.11.2019 16:15' },
];

/* State reducers */
const messages = (state: Message[] = defaultState, action: any ) => {
  const { payload } = action;
  switch (action.type) {
    case 'ADD_MESSAGE':
      return [
        ...state,
        {
          id: payload.id,
          text: payload.text,
          from: payload.from,
          to: payload.to,
          date: payload.date,
        }
      ];
    default:
      return state;
  }
};

export default messages;
