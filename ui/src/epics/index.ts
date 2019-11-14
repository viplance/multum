import { Action } from 'redux';
import { ActionTypes } from '../actions';
import { ActionsObservable, combineEpics, Epic, StateObservable } from 'redux-observable';
import { Observable } from 'rxjs';
import { mapTo } from 'rxjs/operators';

/* Epics: Action side effects */

const sendMessageEpic: Epic = (action$: ActionsObservable<Action>, state$: StateObservable<{}>): Observable<Action> =>
  action$.ofType(ActionTypes.AddMessage).pipe(mapTo({ type: '' }));

const testEpic: Epic = (action$: ActionsObservable<Action>, state$: StateObservable<{}>): Observable<Action> =>
  action$.ofType(ActionTypes.Test).pipe(mapTo({ type: '' }));

export default combineEpics(sendMessageEpic, testEpic);
