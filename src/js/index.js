import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// import AppContainer from 'containers/AppContainer';
import HomeContainer from 'containers/HomeContainer';
import store from './store';
import 'semantic-ui-css/semantic.min.css';
import './main.css';

const history = createBrowserHistory();

render(
  <Provider store={store}>
    <Router history={history}>
      <HomeContainer />
      {/* TODO : create Locale Container and move i18n related settings from App Container */}
      {/* <AppContainer /> */}
    </Router>
  </Provider>,
  document.getElementById('app')
);
