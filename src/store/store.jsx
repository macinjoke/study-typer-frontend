// @flow
import { createStore } from 'redux';
import reducer from '../reducers/reducer';

import type {Store} from '../types'

export default function configureStore(): Store {
  return createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}
