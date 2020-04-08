import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';

import { errorReducer } from './error-reducer';
import collapseAllReducer from './collapse-all-reducer';
import divisionReducer from './division-reducer';
import districtReducer from './district-reducer';
import placeReducer from './place-reducer';
import scoreReducer from './scrore-reducer';
import dialogContentReducer from './dialog-content-reducer';

export default history =>
  combineReducers({
    router: connectRouter(history),
    form: formReducer,
    error: errorReducer,
    collapseAll: collapseAllReducer,
    divisions: divisionReducer,
    districts: districtReducer,
    places: placeReducer,
    score: scoreReducer,
    dialogContent: dialogContentReducer
  });
