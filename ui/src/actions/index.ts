import { combineActions, createAction } from 'redux-actions';

export enum ActionTypes {
  AddContact = 'ADD_CONTACT',
  AddMessage = 'ADD_MESSAGE',
  Test = 'TEST'
}

const AddContact = createAction(ActionTypes.AddContact, (...payload) => {
  return payload;
});

const AddMessage = createAction(ActionTypes.AddMessage, (...payload) => {
  return payload;
});

export const Actions = combineActions(AddContact, AddMessage);
