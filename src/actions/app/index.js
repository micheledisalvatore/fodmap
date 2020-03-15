import { HIDE_ALERT, SHOW_ALERT, SHOW_REMOVE_MODAL, HIDE_REMOVE_MODAL } from '../../constants/app';

export const showAlert = message => ({
  type: SHOW_ALERT,
  message,
});

export const hideAlert = () => ({
  type: HIDE_ALERT,
});

export const showRemoveModal = foodName => ({
  type: SHOW_REMOVE_MODAL,
  foodName,
});

export const hideRemoveModal = () => ({
  type: HIDE_REMOVE_MODAL,
});
