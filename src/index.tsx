import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import IndexPage from "./components/IndexPage";
import './index.css';
import * as serviceWorker from './serviceWorker';
import axios from 'axios'
import { message } from 'antd';

axios.interceptors.response.use(function (response) {
  if (response.headers['authorization'] !== undefined)
    localStorage["token"] = response.headers['authorization'].replace("Bearer ", "")
  return response;
}, function (error) {
  message.warning(error.response.data.value);
  return Promise.reject(error);
});

if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = '/dapi/';
}
else if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = '/api/';
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
