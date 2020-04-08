import { INCREMENT_SCORE, DECREMENT_SCORE } from '../action-types/score-type';

const initialState = {
  score: 0
};

const scoreReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT_SCORE:
      return { ...state, score: state.score + payload.score };
    case DECREMENT_SCORE:
      return { ...state, score: state.score - payload.score };
    default:
      return state;
  }
};

export default scoreReducer;
