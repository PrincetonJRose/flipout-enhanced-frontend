import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Register from './components/Register'
import Home from "./components/Home";
import GameContainer from './containers/GameContainer';

class App extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'SET_CARD_BACKS' })
    this.props.dispatch({ type: 'SET_THEME', theme: 'pokemon' })
  }

  render =()=>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/game' component={GameContainer} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/' component={Home} />
      </Switch>
    </div>
}

const mapStateToProps = state=>{
  return{
    currentUser: state.users.user,
  }
}

export default connect(mapStateToProps)(App)



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