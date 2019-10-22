import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { Button, Form, Grid, Header, Image, Message, Segment, Container, Icon } from 'semantic-ui-react'
import FlipCard from '../components/FlipCard'

class MainContainer extends Component {

  checkGameProgress =()=> {

  }

  flipMatchedCards =()=> {
    this.props.dispatch({ type: 'FLIP_MATCHED_CARDS' })
  }

    render () {
      if (this.props.compare.length >= 2)
        setTimeout( this.flipMatchedCards, 1100)
      if (this.props.gameDeck.length > 0) {
        return (
          <Grid container verticalAlign columns={this.props.columns}>
          {
            this.props.gameDeck.map(card => (
              <Grid.Column>
                <FlipCard card={card} compare={this.props.compare}/>
              </Grid.Column>
            ))
          }
        </Grid>
        )
      } else {
        return null
      }
    }
}

let mapStateToProps =(state)=> {
  return {
    gameDeck: state.cards.gameDeck,
    rows: state.cards.numRows,
    columns: state.cards.numColumns,
    currentUser: state.users.user,
    compare: state.cards.compare,
    gameStats: state.cards.gameStats,
  }
}

export default connect(mapStateToProps)(MainContainer)