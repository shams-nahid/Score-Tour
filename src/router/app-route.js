import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StLayout from '../components/business/layout/st-layout';

export const AppRoute = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' render={props => <StLayout {...props} />} />
      <Route path='*' component={() => '404 NOT FOUND'} />
    </Switch>
  </BrowserRouter>
);
