import React, { Component } from 'react';

import axios from 'axios';
import {Link} from 'react-router-dom'


class Login extends Component {

  state = {
    isLoggedIn: "already have an account? Sign in now!",
    isSignedUp:''
  }

  login = () => {
    axios.post(`http://localhost:8080/login`, {
      email: this.form.email.value,
      password: this.form.password.value
    })
    .then(response => {
      console.log(response)
      localStorage.setItem('token', response.data.token)
      this.setState({
        isLoggedIn: true
      })
    })
  }

  signUp = () => {
    axios.post(`http://localhost:8080/signup`, {
      email: this.form.email.value,
      password: this.form.password.value
    })
    .then(response => {
      this.setState({
        isSignedUp: response.data.success
      })
    })
  }

  getPrivateData = () => {
    const token = localStorage.getItem('token')
    axios.get(`http://localhost:8080/private1`, {
      headers: {
        authorization: `BEARER ${token}`
      }
    })
    .then(response => {
      console.log(response.data)
    }) 
  }


  render() {

    return (
      <div>
        
     <form ref={self => this.form = self}>
          <input type="text" name="email" />
          <input type="password" name="password" />
          <button type="button" onClick={this.login}>Login</button>
          <button type="button" onClick={this.signUp}>Sign Up</button>
        </form>
        <h1>Hi there, {`${this.state.isLoggedIn}`}</h1>
        <h2> {`${this.state.isSignedUp}`}</h2>
        {this.state.isLoggedIn &&
          <Link to="/search" >
          <button onClick={this.getPrivateData}>Discover!</button></Link>
        }

      </div>
    )
  }
}

export default Login
