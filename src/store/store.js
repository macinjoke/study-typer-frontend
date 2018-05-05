// @flow
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducers/reducer'

import type { Store } from '../types'

export default function configureStore(): Store {
  return createStore(
    reducer,
    /* eslint no-underscore-dangle: 0 */
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk),
  )
}
