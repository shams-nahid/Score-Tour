import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { batch, batching } from 'redux-batch-middleware';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import createRootReducer from '../reducers/root-reducer';

const initialState = {
};

export const history = createBrowserHistory();

const middlewares = applyMiddleware(
  routerMiddleware(history),
  logger,
  thunk,
  batch,
);
const store = createStore(
  batching(createRootReducer(history)),
  initialState,
  composeWithDevTools(middlewares),
);

export default store;
