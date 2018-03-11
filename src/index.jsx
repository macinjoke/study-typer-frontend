import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// import Root from './containers/root';
import App from './components/app';
import configureStore from './store/store';
import './app.less';

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
