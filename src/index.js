import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

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

console.log(store.getState());
ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
