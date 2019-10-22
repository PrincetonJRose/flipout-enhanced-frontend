import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment, Container, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Home extends Component {

  hitBigButton() {
    console.log('I hit the big button!')
  }

    render () {
        return (
            <Segment style={{ padding: '8em 0em' }} vertical>
            <Grid container stackable verticalAlign='middle'>
              <Grid.Row>
                <Grid.Column width={8}>
                  <Header as='h3' style={{ fontSize: '2em' }}>
                    This is Flipout! ^_^
                  </Header>
                  <p style={{ fontSize: '1.33em' }}>
                      The pokemon are hiding and will only leave with their partners. Its your job to find and reunite them as quickly as possible! Do you have what it takes to catch them all?
                  </p>
                  {/* <Header as='h3' style={{ fontSize: '2em' }}>
                    I Make Bananas That Can Dance
                  </Header>
                  <p style={{ fontSize: '1.33em' }}>
                    Yes that's right, you thought it was the stuff of dreams, but even bananas can be
                    bioengineered.
                  </p> */}
                  <br></br>
                </Grid.Column>
                <Grid.Column floated='right' width={6}>
                  <Image bordered rounded size='huge' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1vpx6KtbjypNFvMbzccJBP6cWHONT-c9bYTujD0UF1IrtpK6r' />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign='center'>
                  { this.props.currentUser ? 
                      null
                      :
                      <Link to='/login'><Button size='huge' onClick={this.hitBigButton}>Click here to start flipping! <Icon name="smile" /></Button></Link>
                  }
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        )
    }
}

let mapStateToProps =(state)=> {
  return {
    currentUser: state.users.user,
  }
}

export default connect(mapStateToProps)(Home)