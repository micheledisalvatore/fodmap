import { all } from 'redux-saga/effects';

import appSaga from './app';
import foodSaga from './food';

const sagas = [
  ...appSaga,
  ...foodSaga,
];

function* rootSaga() {
  yield all(sagas);
}

export default rootSaga;
