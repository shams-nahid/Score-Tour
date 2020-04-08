import { SET_DIALOG_CONTENT } from '../action-types/dialog-content-type';

const initialState = {
  dialogContent: {}
};

const dialogContentReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_DIALOG_CONTENT:
      return { ...state, dialogContent: payload.dialogContent };
    default:
      return state;
  }
};

export default dialogContentReducer;
