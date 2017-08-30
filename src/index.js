import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import reducer from './reducers';
import * as ReadableApi from './utils/ReadableApi';

//composeEnhancers to add Redux devTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

//createStore with composeEnhancers, with thunk Middleware, withExtraArgument(ReadableApi), which makes the ReadableApi available in the thunks without having to import there.
const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk.withExtraArgument(ReadableApi))
  )
);

//render with Provider, BrowserRouter for redux and react-router-dom
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
