import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { Button, Form, Grid, Header, Image, Message, Segment, Container, Icon, Statistic } from 'semantic-ui-react'
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
        let stats = this.props.gameStats
        return (
          <Grid container verticalAlign='middle' columns={this.props.columns}>
            <Grid.Row centered >
              <br></br>
              <Header as='h3' centered><u>Current Game Stats</u>:</Header>
            </Grid.Row>
            <Grid.Row centered >
              <Statistic.Group size='mini'>
                <Statistic>
                  <Statistic.Value>{stats.combo}</Statistic.Value>
                  <Statistic.Label>Current Combo</Statistic.Label>
                </Statistic>
                <Statistic>
                  <Statistic.Value>{stats.comboChain}</Statistic.Value>
                  <Statistic.Label>Highest Combo Chain</Statistic.Label>
                </Statistic>
                <Statistic>
                  <Statistic.Value>{stats.turns}</Statistic.Value>
                  <Statistic.Label>Turns Taken</Statistic.Label>
                </Statistic>
                <Statistic>
                  <Statistic.Value>{stats.misses}</Statistic.Value>
                  <Statistic.Label>Misses</Statistic.Label>
                </Statistic>
              </Statistic.Group>
            </Grid.Row>
            <br></br>
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