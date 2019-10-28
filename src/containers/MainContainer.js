import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { Button, Form, Grid, Header, Image, Message, Segment, Container, Icon, Statistic, Modal, Transition } from 'semantic-ui-react'
import FlipCard from '../components/FlipCard'

class MainContainer extends Component {

  checkGameProgress =()=> {

  }

  flipMatchedCards =()=> {
    this.props.dispatch({ type: 'FLIP_MATCHED_CARDS' })
  }

    render () {
      let stats = this.props.gameStats
      if (this.props.compare.length >= 2)
        setTimeout( this.flipMatchedCards, 1100)
      if (this.props.gameDeck.length > 0) {
        return (
          <Grid container verticalAlign='middle' columns={this.props.columns}>
            <Modal centered id='winGameModal' open={stats.win} closeIcon onClose={ ()=> {
              this.props.dispatch({ type: 'RESET_GAME_STATS' })
            } }  >
              <Modal.Header centered ><Icon floated='left' name='trophy' /> You win!!! <Icon name='trophy' /></Modal.Header>
              <Modal.Content image>
                <Image wrapped size='small' src='https://cdn.bulbagarden.net/upload/a/a7/PSMD_poster.png' />
                <Modal.Description>
                  <Header>Good job!</Header>
                  <p>
                    You were able to locate all of the pokemon and their partners! You should feel proud! Now its time to work on improving your skills for future pokemon who may need your assistance! <Icon name='smile' />
                  </p>
                </Modal.Description>
              </Modal.Content>
            </Modal>
            <Grid.Row centered >
              <br></br>
              <Header as='h3' centered><u>Current Game Stats</u>:</Header>
            </Grid.Row>
            <Grid.Row centered >
              <Statistic.Group size='mini'>
                <Statistic>
                  <Statistic.Label>Current Combo</Statistic.Label>
                  <Statistic.Value>{stats.combo}</Statistic.Value>
                </Statistic>
                <Statistic>
                  <Statistic.Label>Highest Combo</Statistic.Label>
                  <Statistic.Value>{stats.comboChain}</Statistic.Value>
                </Statistic>
                <Statistic>
                  <Statistic.Label>Turns Taken</Statistic.Label>
                  <Statistic.Value>{stats.turns}</Statistic.Value>
                </Statistic>
                <Statistic>
                  <Statistic.Label>Misses</Statistic.Label>
                  <Statistic.Value>{stats.misses}</Statistic.Value>
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
        return (
          <Container centered >
            <br></br>
            <Segment centered raised>
              <Header align='center'>
                  <Icon className='up-arrow' name='arrow alternate circle up outline' />
                Click on the New Game button to start!
              </Header>
            </Segment>
          </Container>
        )
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