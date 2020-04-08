import { DECREMENT_SCORE, INCREMENT_SCORE } from '../action-types/score-type';

export const incrementScore = score => {
  return {
    type: INCREMENT_SCORE,
    payload: {
      score
    }
  };
};

export const decrementScore = score => {
  return {
    type: DECREMENT_SCORE,
    payload: {
      score
    }
  };
};
