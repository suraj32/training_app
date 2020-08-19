import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from "./routes/Routes";
import { createStore, combineReducers } from 'redux';
import { loginDetailsReducer } from './reducers/loginDetailsReducer';
import { Provider } from 'react-redux';
import projectsReducer from './reducers/projectsReducer'

const store = createStore(combineReducers({loginDetailsReducer, projectsReducer}));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
