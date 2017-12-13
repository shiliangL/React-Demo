import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers/index';
const store = createStore(reducers)
import App from "./components/app";
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('content')
);
 