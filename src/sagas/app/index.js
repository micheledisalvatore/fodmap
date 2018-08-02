import { fork, put, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { SHOW_ALERT } from '../../constants/app';
import { hideAlert } from '../../actions/app';

function* setAlertClosing() {
  yield delay(2000);
  yield put(hideAlert());
}

function* watchActions() {
  yield takeLatest(SHOW_ALERT, setAlertClosing);
}

export default [
  fork(watchActions),
];
