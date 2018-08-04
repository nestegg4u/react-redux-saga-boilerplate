import React from 'react';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';

import AuthPage from 'containers/AuthPage';
import HomePage from 'containers/HomePage';

import GenericNotFound from 'components/GenericNotFound';

import AuthRoute from './AuthRoute';

function Router() {
  return (
    <Switch>
      <AuthRoute exact path="/" component={HomePage} />
      <Route path="/auth" component={AuthPage} />
      <Route component={GenericNotFound} />
    </Switch>
  );
}

export default Router;
