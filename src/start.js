import React from 'react';
import ReactDOM from 'react-dom';

// PAGES
import App from './pages/app';

// REDUX
import reducer from './react_utils/redux/reducers';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
const store = createStore(reducer, composeWithDevTools(applyMiddleware(reduxPromise)));

// initSocket(store);

let elem = <Provider store={store}>
    <App />
</Provider>;


ReactDOM.render(elem, document.querySelector('main'));
