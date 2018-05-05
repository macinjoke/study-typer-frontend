// @flow
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './components/app'
import configureStore from './store/store'
import './app.less'

const store = configureStore()

const element = document.getElementById('app')

if (!element) {
  throw new Error("couldn't find element with id app")
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  element,
)
