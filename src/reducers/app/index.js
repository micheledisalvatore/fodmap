import { handleActions } from 'redux-actions';
import { assocPath } from 'ramda';

import { HIDE_ALERT, SHOW_ALERT, SHOW_REMOVE_MODAL, HIDE_REMOVE_MODAL } from '../../constants/app';

const defaultState = {
  isAlertVisible: false,
  alertMessage: '',
  isRemoveModalVisible: false,
  removingFood: '',
};

const showAlert = (state, { message }) => {
  let newState = state;
  newState = assocPath(['isAlertVisible'], true)(newState);
  newState = assocPath(['alertMessage'], message)(newState);

  return newState;
};

const hideAlert = state => assocPath(['isAlertVisible'], false)(state);
const showRemoveModal = (state, { foodName }) => {
  let newState = state;
  newState = assocPath(['isRemoveModalVisible'], true)(newState);
  newState = assocPath(['removingFood'], foodName)(newState);

  return newState;
};
const hideRemoveModal = state => assocPath(['isRemoveModalVisible'], false)(state);

export default handleActions({
  [HIDE_ALERT]: hideAlert,
  [SHOW_ALERT]: showAlert,
  [HIDE_REMOVE_MODAL]: hideRemoveModal,
  [SHOW_REMOVE_MODAL]: showRemoveModal,
}, defaultState);
