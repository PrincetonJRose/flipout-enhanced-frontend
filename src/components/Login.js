import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import jwt_decode from 'jwt-decode'
import { userLogin, getUser } from '../services/API_calls'

class Login extends Component {

    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            errors: [],
            loading: false
        }
    }

    handleSubmit =(e)=> {
        e.preventDefault()
        
        userLogin()
        .then(data => {
            if (data.errors) {
                this.setState({ errors: data.errors, loading: false })
            } else {
                getUser(jwt_decode(data.jwt_token).user_id).then( userData => {
                    localStorage.setItem("jwt_token", data.jwt_token)
                    this.props.dispatch({ type: "SET_USER", user: userData })
                })
            }
        })
        e.target.reset()
    }

    render() {
        if (this.props.currentUser) {
            return <Redirect to="/home"/>
        }
        return (
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                        <Image src='data:image/png;base64,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' />
                    Enter Account Information
                    </Header>
                    <Form size='large'>
                        <Segment stacked>
                            <Form.Input fluid icon='user' iconPosition='left' placeholder='Username'
                            required />
                            <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='password'
                            required
                            />
                
                            <Button color='green' fluid size='large'>
                            Login
                            </Button>
                        </Segment>
                    </Form>
                    <Message>
                        Don't have an account? Click <Link to='/register' >here</Link> to sign up!
                    </Message>
                </Grid.Column>
            </Grid>
        )
    }
}

export default connect()(Login)