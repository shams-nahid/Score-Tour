import { SET_DIALOG_CONTENT } from '../action-types/dialog-content-type';

export const setDialogContent = dialogContent => {
  return {
    type: SET_DIALOG_CONTENT,
    payload: {
      dialogContent
    }
  };
};
