import {
  COLLAPSE_ALL_CHECKED,
  COLLAPSE_ALL_UN_CHECKED
} from '../action-types/collapse-all-type';

const initialState = {
  isCollapseAllChecked: false
};

const collapseAllReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case COLLAPSE_ALL_CHECKED:
      return { ...state, isCollapseAllChecked: payload.isChecked };
    case COLLAPSE_ALL_UN_CHECKED:
      return {
        ...state,
        isCollapseAllChecked: payload.isChecked
      };
    default:
      return state;
  }
};

export default collapseAllReducer;
