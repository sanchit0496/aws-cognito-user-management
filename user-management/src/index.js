import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home'
import { Account } from './components/Account';


ReactDOM.render(
  <Account>
    <BrowserRouter>
        <Switch>
            <Route exact path = "/" component = {Login}/>
            <Route exact path = "/signup" component = {Signup}/>
            <Route exact path = "/home" component = {Home}/>
        </Switch>
    </BrowserRouter>
    </Account>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
