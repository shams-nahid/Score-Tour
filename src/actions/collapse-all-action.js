import {
  COLLAPSE_ALL_CHECKED,
  COLLAPSE_ALL_UN_CHECKED
} from '../action-types/collapse-all-type';

export const setCollapseAllChecked = isChecked => ({
  type: COLLAPSE_ALL_CHECKED,
  payload: {
    isChecked
  }
});

export const setCollapseAllUnChecked = isChecked => ({
  type: COLLAPSE_ALL_UN_CHECKED,
  payload: {
    isChecked
  }
});
