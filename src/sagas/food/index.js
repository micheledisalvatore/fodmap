import { fork, put, takeLatest } from 'redux-saga/effects';

import { ADD_TO_LOCAL, REMOVE_FROM_LOCAL } from '../../constants/food';
import { showAlert } from '../../actions/app';

function* setAddAlertOpen() {
  yield put(showAlert('Food added successfully!'));
}

function* setRemoveAlertOpen({ name }) {
  yield put(showAlert(`${name} removed successfully!`));
}

function* watchActions() {
  yield takeLatest(ADD_TO_LOCAL, setAddAlertOpen);
  yield takeLatest(REMOVE_FROM_LOCAL, setRemoveAlertOpen);
}

export default [
  fork(watchActions),
];
