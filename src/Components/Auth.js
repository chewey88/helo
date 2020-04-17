import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


class Auth extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: '',
        }
    }
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleRegister = () => {
        const body = {
            username: this.state.username,
            password: this.state.password
        }
        axios.post('/api/auth/register', body)
        .then(res => {
            this.props.history.push('/dashboard')
        }).catch((err) => alert('Could not Register'))
    }

    handleLogin = () => {
        const body = {
            username: this.state.username,
            password: this.state.password
        }
        axios.post('/api/auth/login', body)
        .then(res => {
            this.props.history.push('/dashboard')
        }).catch(err => {
            alert('Could not log in')
        })
    }
    render(){
        return(
        <div className="login-body">

            <div className="input-container">
                <input 
                maxLength="100"
                name="Username:"
                
                onChange={(e) => {
                    this.handleInput(e)
                }}
                />
                <input
                    type="password"
                    name="Password:"
                    onChange={(e) => {
                        this.handleInput(e)
                    }}
                    />
            </div>
                <button
                    onClick={() => {
                        this.handleLogin()
                    }}
                    className="login-button"
                    >Login</button>
                <button
                    onClick={() => {
                       this.handleRegister()     
                    }}
                    className="register-button">
                        Register</button>
        </div>
        )
    }
}

export default Auth