import React, { Component } from 'react'
import { Icon, Menu, Grid, Modal, Button, Header, Image, Form, Table } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'

class Navbar extends Component {
    state = {}


    handleChange = (e, { value, cardBack }) => this.setState({ value, cardBack })

    render () {
        const { value, cardBack } = this.state
        return (
            <Grid.Column centered='true'>
        <Menu compact icon='labeled'>
          <Menu.Item name='flag checkered'>
            <Icon name='flag checkered' />
            <br></br>
            <Modal id='newGameModal' trigger={<Button basic color='green'>New Game</Button>} centered={false} closeIcon>
              <Modal.Header>Create A New Game</Modal.Header>
              <Modal.Content image>
                <Image wrapped size='medium' src='https://i.pinimg.com/originals/25/57/36/25573650a72e7232ac940c18a5b7cb5e.png' />
                <Modal.Description>
                  <Header>Select A Board Size</Header>
                  <Form onSubmit={() => this.props.newGame(this.state.value, this.state.cardBack)}>
                    <Form.Group inline>
                      <label>Size:</label>
                      <Form.Radio
                        label='4x4'
                        value='sm'
                        checked={value === 'sm'}
                        onChange={this.handleChange}
                      />
                      <Form.Radio
                        label='4x5'
                        value='md'
                        checked={value === 'md'}
                        onChange={this.handleChange}
                      />
                      <Form.Radio
                        label='4x6'
                        value='lg'
                        checked={value === 'lg'}
                        onChange={this.handleChange}
                      />
                    </Form.Group>
                    {/* <Form.Group inline>
                      <label>Card Background:</label>
                      {this.props.cardBacks.map( cardPic => {
                        return (
                          <Form.Radio
                            label={cardPic}
                            value={cardPic}
                            checked={value === cardPic
                            onChange={this.handleChange}
                          />
                        )
                      })}
                    </Form.Group> */}
                    <Form.Button type='submit'>Create Game!</Form.Button>
                  </Form>
                </Modal.Description>
              </Modal.Content>
            </Modal>
          </Menu.Item>

          <Menu.Item>
            <Icon name='chart line' />
            <br></br>
            <Modal id='newGameModal' trigger={<Button basic color='orange'>Statistics</Button>} centered={false} closeIcon>
              <Modal.Header>{this.props.currentUser ?`${this.props.currentUser.username}'s` : <div>No User</div>} Statistics</Modal.Header>
              <Modal.Content image>
                <Image wrapped size='medium' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvwG149uDub3muJZQGjqtenTmPqp0hM0GMgokFB6t-8jI5tQFDFQ' />
                <Table basic='very' celled collapsing>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell textAlign='center'>Category</Table.HeaderCell>
                      <Table.HeaderCell textAlign='center'>Value</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>
                        <Header as='h4' image>
                          <Image src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANsAAADmCAMAAABruQABAAAApVBMVEUAAAD29vb+BwDf39/+/v79n5/6+vrAwMCOjo7m5ubj4+O8DQn7AADDw8N1dXXGxsbZ2dmHDAmampqsDQkzMzNYWFioqKheXl6ysrLx8fHVDgqTDQndDgm5ubn/mZn4eXf6jIv1FA/pDwpra2tPT08lAACFhYX3YmD4cnAVAADABwAtLS3xAACuCACZjY1+AAD3V1OQKih6Dwx+MTBvDQtgZ2f5hoNY1CLZAAADuUlEQVR4nO3d21baQBSAYSM0khAFbQOkWA9ErSJq8dD3f7Que9fZw5rNuIOB/v81ZOZL0LUmCWEv2d32PnsCDYZtO8O2nWHbzrCpSm2ym5CdrTocWHRYmc3IzJbmezblZkfOzpYZ2TJsirApwobNKGyKsGEzCpsibNiMwpak3WBmtvBQSr3Olk5Ogj0+HVv09BgeaqLD6Wzdq/D+viv2LSruwkNddS1tZXjA64WJbXEdHqrEhg0bNmzYsGHDhg0btjVscpWtsN0tCqco26Vi/VbqVuI+WzqpnY6WD1+D3br9irEV/eBAD8sjd4LelbjP1u2JPTVX7PAvbuc2K3HZXMyv5/uUKm39Vtn62LBhw4YNGzZs2LBhw2ZscxfZxcJjM1mJb9xW/L5wE7Yz8ZKolfjmbWeCougnNmzYsGHDhg0bNmzYsGH7gK1ySjS2izM3SRGvaM4mEe+29EC88njmJs8GLNxmgnYuXmN0UqEQ8zsWhoPUb5vGDLjBc0GyKTZsMmwNhQ2bJ2wNhQ2bJ2wNhQ2bJ4/NWrC6pm3iCvDt93A2N943bRNX9/cfxIZlihsg2mATydMaW2xz/nfslM0Jm0nYsKnCZhI2bKqwmYQNm6pdtsmvvLbA9tp3m4U3v3DfM18eudVjp7fl3H2bYiU+E/N7Vduidu+peNOb+Ip5kjlV8kvxp+GhNB/2hm1jYas6Thk2bNiwYcOGDRs2bNiwfYJN8QyrmZFtFh5Ks6BfZRuLp2y/TEPP6p4+y82Im78zhe05PNTLjZt8bvcq20js8LFiT4lKQRF5bIquqiz/d/0u7/pfZTtpu83dcI7tPWzBsEWEDRs2EbaIsGHDJsIWka0tdpkVqlL8GJRiw9UKW5L/cOu5j9SuRwcRnZTu5W1R2RtF1BMbvhGG/O9318Wvg3u+lz8QR1LRQHEIJlm+dtlEbKbX9fzEufKZA83Z8uDfpCj32eKfp4ANGzZs2LBhw4YNGzZsqjQX0kefb1MsIeXvbos7r7PhwG24Ps3cFt69ueJIVh13j0TQWmuzCBs2bNiwYcOGDRs2bNg+aBt1hsGMbOGBOh+wySecp5pr+eG7EjRlipHK1PP0cq1NHMmW2Tb9m/LYsGHDhg0bNmzYsGH7H23r353ru/y6cVt9/y3Y4NCiQXig+9rSlmjOFyh2uKZKMZZu0kpbuFTzYdKUpVZTwqYIGzajsCnChs0obIqwYTMKm6KdtuVGtrx9tiSrxSO+Y6ozsxnZ2TRrc012EzK0tS5s29ku2/4AHbTn16VJnhQAAAAASUVORK5CYII=' rounded size='mini' />
                          <Header.Content>
                            Total Games Played
                          </Header.Content>
                        </Header>
                      </Table.Cell>
                      <Table.Cell>{this.props.currentUser ?this.props.currentUser.user_stats[3].score : <div>No User</div>}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>
                        <Header as='h4' image>
                          <Image src='data:image/png;base64,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' rounded size='mini' />
                          <Header.Content>
                            Fewest Misses
                          </Header.Content>
                        </Header>
                      </Table.Cell>
                      <Table.Cell>{this.props.currentUser ?this.props.currentUser.user_stats[0].score : <div>No User</div>}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>
                        <Header as='h4' image>
                          <Image src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABBVBMVEX///8AAABcN6Hu7u4ZDXP/AJbOzs7z8/Oqqqr/AJna2trDAHLt7e1fOaYqGUqEhITk5OSioqKKdrhXMJ+WlpYaDXfDw8MADXFUMpoRCU5OOaIAAGhKF5lTMZDvAI3h3ewPCRoEAhI7OztRUVGrnstOH5skFj8XDGfhFpmjor5RJpxGKnsQAHEIBCVYMZ9dXV01IF1KRYd1dXWWlLVpZpkKBS3Gvdvl5eysCIa2trZ+ZrIMBjWvFn6KioooKCgXAD+hkcUNFTktLS1mZmZFRUW1AGk9SIctFFc2RT4xKnwmAFUAAGESCVKxr8d+c5mFhI7NBYeuRXkACEVlYZZCAJaECHNSPXxXxPblAAADhElEQVR4nO3cWVMaQRSGYcYFCAZBQY27wR1Rs5gYorgkZjWLMSb//6fEKu/6nCJfjS2D5fteWj1OPwxe2NMzuVy0Skm8SvGmFTGECBFmH0KECLMPIUKE2YcQIcLsu9fCal6ofTyargNTUlROWI0orCif+0E5XTsTpmnpQld6LVwrD6TqyVAYQoQIESJEiBAhQoQIESLsU2FHOeFpPOGlJOyk5VQrYZ1fI0KHM7GEU3+U83343DEz1RY28vbTGnkktBFP+EY534JzWfPphcP/L6ZQON0wQoQIESJEiBAhQoQIESLsU+GcqakIa+ezQefOf8C9F9qJjttftSIQd97a4zZnzWVdQIgQIUKECBEiRIgQIUKECDMR1sKannDVDLPHucJWmBHKd7lLpvbBWtDp4YZp3HSyaFqxo5zj9s1xm7/3wi7MDC62X4UlRcvJ2c/h2D4SMWOas5/V4tVq0NVr5Tuzb9dpvttRH1tTYfY5jW/OZXWEo8q+GE+4Gg5qakLzRzfrCJ+3wlFO3k4jhAgRIkSIECFChAgRIkSI8DbC5orppBYOqv2oC/00c2/tvTR9meixcKBpMsCB8ifnjKYlO3ezDtVqKcC4QqXyM0W4LU1eCiFChAgRIkSIECFChAgRRhWaRJDpqyJM7P14zZP6Pn6yFJZsKcB5c2DSzhXCqqZ88jQomVaM6+a46yM1oW1LuYrz9ri2XVEaDCs47z0VhVLZCwcRIkSIECFChAgRIkSI8EEJyz0WTgylFh4tm/7OC23FE16uK9mJNjThCzst6e2eTsXC4zBJqGXf7tl2RmlC6Q2tTsWCBcUT2je0Fp1RCBF2DyHC7iG8CSHC7iFE2D2ENyFE2L2HIBS66/+Ai7YxkzNIakx53qJuzydVPzM/el+xc7DXy3vzx6QzTKmuXIozu2FDqur8rtTvNrlT4bLyx+qEECFChAgRIkSIECFChAjvjVC6/9+4z0K7UcErHbA/hFopiQgRIkSIECFChAgRIkSIEOF1t7nLfdQIejepLDQU4gntixec8kk4z8aRJnSSdpssa2sWwipGQXu+w+42SZ8k3E25ouR8G6Q1OmfHEEKECBEiRIgQIUKECBEi7Adhyj33Nm0PR1ThZNpnItJV3K0Io+p3u3rklPrZF6dqrycvFVNYyhrjhhAhwuxDiBBh9iFEiDD7ECJE2AdJOyi0Is7qHwP9M+z5B+p/AAAAAElFTkSuQmCC' rounded size='mini' />
                          <Header.Content>
                            Best Chain Combo
                          </Header.Content>
                        </Header>
                      </Table.Cell>
                      <Table.Cell>{this.props.currentUser ?this.props.currentUser.user_stats[1].score : <div>No User</div>}</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Modal.Content>
            </Modal>
          </Menu.Item>

          <Menu.Item>
            <Icon name='power off' />
            <br></br>
            {
                this.props.currentUser ?
                    <Button onClick={this.props.logout} basic color='blue'>Log Out</Button>
                :
                    <Button onClick={null} basic color='blue'>Log In</Button>
            }
          </Menu.Item>
        </Menu>
        </Grid.Column>
        )
    }
}

export default connect()(Navbar)