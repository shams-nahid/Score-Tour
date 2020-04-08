import { GET_ALL_DIVISIONS } from '../action-types/division-type';
import { divisions } from '../constants/divisions';

export const getDivisions = () => {
  return {
    type: GET_ALL_DIVISIONS,
    payload: {
      divisions
    }
  };
};
