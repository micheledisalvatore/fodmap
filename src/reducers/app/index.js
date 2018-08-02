import { handleActions } from 'redux-actions';
import { assocPath } from 'ramda';

import { HIDE_ALERT, SHOW_ALERT } from '../../constants/app';

const defaultState = {
  isAlertVisible: false,
};

const showAlert = state => assocPath(['isAlertVisible'], true)(state);
const hideAlert = state => assocPath(['isAlertVisible'], false)(state);

// window.setTimeout(() => this.setState({
//   isAlertVisible: false,
// }), 2000);

export default handleActions({
  [HIDE_ALERT]: hideAlert,
  [SHOW_ALERT]: showAlert,
}, defaultState);
