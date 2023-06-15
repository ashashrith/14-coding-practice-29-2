// Write your JS code here

import {Component} from 'react'
import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'
import './index.css'

class Login extends Component {
  state = {
    username: 'rahul',
    password: 'rahul@2021',
    submitError: false,
    errorMsg: '',
  }

  onSubmitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errMsg => {
    this.setState({submitError: true, errorMsg: errMsg})
  }

  onClickLogin = () => {
    const {username, password} = this.state

    return (
      <form onSubmit={this.onSubmitForm}>
        <input
          type="text"
          id="username"
          className="username-input-filed"
          value={username}
        />
        <input
          type="password"
          id="username"
          className="username-input-filed"
          value={password}
        />
      </form>
    )
  }

  render() {
    const {submitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }

    return (
      <div className="login-cont">
        <h1 className="login-heading">Please Login</h1>
        <button type="submit" onClick={this.onClickLogin} className="login-btn">
          Login with sample creds
        </button>
        {submitError && <p className="p">{errorMsg}</p>}
      </div>
    )
  }
}

export default Login
