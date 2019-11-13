import { Action } from 'redux';
import { ActionsObservable, combineEpics, Epic } from 'redux-observable';
import { take, tap } from 'rxjs/operators';

const epic: Epic = (action$: ActionsObservable<Action>) => action$.ofType('AAA').pipe(take(1), tap(result => console.log('epic result', result)));
const preEpic: Epic = (action$: ActionsObservable<Action>) => action$.ofType('CCC').pipe(take(1), tap(result => console.log('epic result 2', result)));

export default combineEpics(epic, preEpic);
