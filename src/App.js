import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import {Switch,Link,Route} from 'react-router-dom';
import Dashboard from './containers/dashboard';
import Preference from './containers/preference';
import Login from './containers/login';
import propTypes from 'prop-types';
function App() {
  const[token,setToken]= useState(getToken());

  function getToken(){
    const token=localStorage.getItem("token");
    return token;
  }

  if(token===null){
    return  <Login setToken={setToken} />
  }
  return (
    <div className="App">
      <Link to='dashboard'>Dashboard</Link>
      <Link to='preference'>Preference</Link>
     
      <Switch>
        <Route exact path='/dashboard' component={Dashboard} />
        <Route path='/preference' component={Preference} />
      </Switch>
    </div>
  );
}


export default App;
App.prototype={
  setToken:propTypes.func.isRequired
}