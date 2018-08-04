import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import store, { history } from 'redux/store';
import registerServiceWorker from 'setup/registerServiceWorker';
import Router from 'setup/router';

import 'whatwg-fetch';

import 'font-awesome/css/font-awesome.min.css';

import './styles.css';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
