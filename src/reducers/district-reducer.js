import { GET_DISTRICT_BY_DIVISION_ID } from '../action-types/district-type';
import { districts } from '../constants/districts';

const initialState = {
  districts
};

const districtReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_DISTRICT_BY_DIVISION_ID:
      return { ...state, districts: payload.districts };
    default:
      return state;
  }
};

export default districtReducer;
