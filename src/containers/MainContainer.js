import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { Button, Form, Grid, Header, Image, Message, Segment, Container, Icon } from 'semantic-ui-react'
import { getTheme } from '../services/API_calls'

class MainContainer extends Component {
    
    render () {
        return (
          <div>
            <br></br>
            Maincontainer for game is here!  ^_^
            <br></br>
            <p>Rows: {this.props.rows}</p>
            <p>Columns: {this.props.columns}</p>

          </div>
        )
    }
}

let mapStateToProps =(state)=> {
  return {
    themeDeck: state.cards.themeDeck,
    rows: state.cards.numRows,
    columns: state.cards.numColumns,
    currentUser: state.users.user
  }
}

export default connect(mapStateToProps)(MainContainer)