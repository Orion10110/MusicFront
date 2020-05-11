import './index.scss';

import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { createBrowserHistory } from 'history';

import { MainAppComponent } from 'MainAppContainer';
import { Auth } from './modules/authentication';
import { store } from 'store';

export default function App() {
  const customHistory = createBrowserHistory();
  return (
    <Provider store={store} >
      <Router history={customHistory}>
        <Auth>
          <MainAppComponent/>
        </Auth>
      </Router>
    </Provider>
  );
};
