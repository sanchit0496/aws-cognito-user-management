import logo from './logo.svg';
import './App.css';
import SignUp from './components/Signup.js'
import Login from './components/Login.js'
import { Account } from './components/Account';
import Status from './components/Status';
import { Route, Switch, BrowserRouter } from 'react-router-dom';


function App() {
  return (
      <Account>
        <Login />
      </Account>
  );
}

export default App;
