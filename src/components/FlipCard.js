import React from 'react'
import { Container, Image, Card } from 'semantic-ui-react'
import { connect } from 'react-redux'
import ReactCardFlip from 'react-card-flip'

const FlipCard = props => {

  function handleClick() {
    if (!props.card.isFlipped && props.compare.length < 2) {
      props.dispatch({ type: 'FLIP_CARD', card: props.card })
    }
  }

  return (
    <Container align='center' centered >
      <div className="flip-card" align='center'>
        <ReactCardFlip isFlipped={props.card.isFlipped} flipDirection="horizontal">
          <div className="flip-card-front" onClick={handleClick} key="front">
            <Image centered src={props.cardBack} size='small' />
          </div>
          <div className="flip-card-back" onClick={handleClick} key="back">
            <Image centered src={props.card.image_url} wrapped />
          </div>
        </ReactCardFlip>
      </div>
    </Container>
  )
}

let mapStateToProps =(state)=> {
  return {
    cardBack: state.cards.cardBack,
  }
}

export default connect(mapStateToProps)(FlipCard)