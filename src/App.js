import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from './store/configure-store';
import { AppRoute } from './router/app-route';

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <AppRoute />
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
