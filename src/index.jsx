import React from 'react';
import { render } from 'react-dom';
import Root from './containers/root';
import configureStore from './store/store';
import './app.less';

const store = configureStore();

render(
  <div>
    <Root store={store}/>
  </div>,
  document.getElementById('app')
)
