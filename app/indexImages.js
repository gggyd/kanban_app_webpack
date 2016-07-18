import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Images from './containers/images';
import configureStore from './store/configureStore';

const store = configureStore({});

render(
  <Provider store={store}>
    <Images />
  </Provider>,
  document.getElementById('app')
)