import React, { Component } from 'react'
import { Container, Image } from 'semantic-ui-react'
import { connect } from 'react-redux'
import ReactCardFlip from 'react-card-flip'

class FlipCard extends Component {
  constructor() {
    super()
  }

  handleClick =(e)=> {
    e.preventDefault()
    if (!this.props.card.isFlipped && this.props.compare.length < 2) {
      this.props.dispatch({ type: 'FLIP_CARD', card: this.props.card })
    }
  }

  render () {
    return (
      <Container>
        <div className="flip-card">
          <ReactCardFlip isFlipped={this.props.card.isFlipped} flipDirection="horizontal">
            <div className="flip-card-front" onClick={this.handleClick} key="front">
              <Image src={this.props.cardBack} size='small' />
            </div>
            <div className="flip-card-back" onClick={this.handleClick} key="back">
              <Image src={this.props.card.image_url} wrapped />
            </div>
          </ReactCardFlip>
        </div>
      </Container>
    )
  }
}

let mapStateToProps =(state)=> {
  return {
    cardBack: state.cards.cardBack,
  }
}

export default connect(mapStateToProps)(FlipCard)