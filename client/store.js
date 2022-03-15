/**
 * Create Redux Store with combined reducers and devTools
 * Single source of truth
 */

import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index.js'

const store = createStore(
  reducers,
  composeWithDevTools()
);

export default store;