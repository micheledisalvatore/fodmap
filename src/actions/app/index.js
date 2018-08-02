import { HIDE_ALERT, SHOW_ALERT } from '../../constants/app';

export const showAlert = () => ({
  type: SHOW_ALERT,
});

export const hideAlert = () => ({
  type: HIDE_ALERT,
});
