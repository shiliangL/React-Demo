import React from 'react';
import ReactDOM from 'react-dom';
import RouteMap from './router/RouteMap'
import { hashHistory } from 'react-router'
import './static/css/layout.less'
import { Provider } from 'react-redux'
import configStore from './store/configStore'
const store = configStore()

ReactDOM.render(
  <Provider store={store}>
    <RouteMap history={ hashHistory }/>
  </Provider>,
  document.getElementById('content')
);
 