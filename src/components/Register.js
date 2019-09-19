import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import jwt_decode from 'jwt-decode'

class Register extends Component {

    render () {
        return (
            <div>Registration goes here! ^_^</div>
        )
    }
}

export default connect()(Register)