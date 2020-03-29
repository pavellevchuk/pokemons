import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux'
import { compose, createStore, applyMiddleware  } from 'redux'
import { rootReducer } from './reducers'
import { apiMiddleware } from './middleware'
import thunk from 'redux-thunk'

const store = createStore(
    rootReducer,
    compose(applyMiddleware(apiMiddleware, thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

