import React from 'react';
import App from './App';

import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import { albumReducer } from './Redux/Reducers';

const allEnhancers = compose(
  applyMiddleware(thunk)
);

const appStore = combineReducers({
  album: albumReducer
});

const store = createStore(appStore, allEnhancers);

const Output = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
export default Output;