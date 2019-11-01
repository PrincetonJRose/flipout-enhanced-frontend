import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Header, Icon, Statistic, Modal } from 'semantic-ui-react'
import FlipCard from '../components/FlipCard'

class GameContainer extends Component {

  state = { winModalOpen: false }

  checkGameProgress =()=> {

  }

  flipMatchedCards =()=> this.props.dispatch({ type: 'FLIP_MATCHED_CARDS' })

  openWinModal =()=> this.setState({ winModalOpen: true })

  render () {
    let stats = this.props.gameStats
    if (this.props.compare.length >= 2)
      setTimeout( this.flipMatchedCards, 1100)
    if (stats.win)
      this.openWinModal()
    if (this.props.gameDeck.length > 0) {
      return (
        <Grid container verticalAlign='middle' columns={this.props.columns}>
          <Modal centered={true} id='winGameModal' open={this.state.winModalOpen} closeIcon onClose={ ()=> {
            this.setState({ winModalOpen: false })
            this.props.dispatch({ type: 'RESET_GAME_STATS' })
          }} >
            <Icon name='trophy' />

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

export default connect(mapStateToProps)(GameContainer)