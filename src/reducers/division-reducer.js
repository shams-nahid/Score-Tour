import { GET_ALL_DIVISIONS } from '../action-types/division-type';

const initialState = {
  divisions: []
};

const divisionReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_DIVISIONS:
      return { ...state, divisions: payload.divisions };
    default:
      return state;
  }
};

export default divisionReducer;
