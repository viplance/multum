import { Action } from 'redux';
import { ActionsObservable, combineEpics, Epic, StateObservable } from 'redux-observable';
import { Observable } from 'rxjs';
import { mapTo } from 'rxjs/operators';

/* Epics: Action side effects */

const sendMessageEpic: Epic = (action$: ActionsObservable<Action>, state$: StateObservable<{}>): Observable<Action> =>
  action$.ofType('ADD_MESSAGE').pipe(mapTo({ type: '' }));

const testEpic: Epic = (action$: ActionsObservable<Action>, state$: StateObservable<{}>): Observable<Action> =>
  action$.ofType('TEST_EPIC').pipe(mapTo({ type: '' }));

export default combineEpics(sendMessageEpic, testEpic);
