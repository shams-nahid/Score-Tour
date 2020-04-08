import { GET_PLACES_BY_DISTRICT_ID } from '../action-types/place-type';

const initialState = {
  places: []
};

const placeReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PLACES_BY_DISTRICT_ID:
      return {
        ...state,
        places: payload.places
      };
    default:
      return state;
  }
};

export default placeReducer;
