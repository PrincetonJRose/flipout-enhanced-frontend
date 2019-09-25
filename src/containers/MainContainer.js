import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { Button, Form, Grid, Header, Image, Message, Segment, Container, Icon } from 'semantic-ui-react'
import { getTheme } from '../services/API_calls'

class MainContainer extends Component {
    
    render () {
        return (
          <div>Maincontainer for game is here!  ^_^</div>
        )
    }
}

let mapStateToProps =(state)=> {
  return {
    themeDeck: state.cards.themeDeck,
  }
}

export default connect(mapStateToProps)(MainContainer)