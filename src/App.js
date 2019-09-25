import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Register from './components/Register'
import Home from "./components/Home";
import MainContainer from './containers/MainContainer';

class App extends Component {

  render () {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/game' component={MainContainer} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/' component={Home} />
        </Switch>
      </div>
    );
  }
}

export default connect()(App)



{/* <header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header> */}