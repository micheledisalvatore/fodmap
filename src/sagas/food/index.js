import { fork, put, takeLatest } from 'redux-saga/effects';

import { ADD_TO_LOCAL } from '../../constants/food';
import { showAlert } from '../../actions/app';

function* setAlertOpen() {
  yield put(showAlert());
}

function* watchActions() {
  yield takeLatest(ADD_TO_LOCAL, setAlertOpen);
}

export default [
  fork(watchActions),
];
