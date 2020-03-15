/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from '../../reducers';

const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware);
const composeArgs = [middleware];

if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  composeArgs.push(window.__REDUX_DEVTOOLS_EXTENSION__());
}

export const store = createStore(reducers, compose(...composeArgs));
export const runSaga = sagaMiddleware.run;
