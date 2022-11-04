import './index.css'
import Cookies from 'js-cookie'
import {Component} from 'react'
import {Redirect} from 'react-router-dom'

class Login extends Component {
  state = {
    username: '',
    password: '',
    errorMessage: '',
  }

  userAuthenticationFetchApi = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {
      username,
      password,
    }
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(response)
    console.log(data)
    if (response.ok === true) {
      const token = data.jwt_token
      Cookies.set('jwt_token', token, {expires: 1})

      const {history} = this.props
      history.replace('/')
    } else {
      const errorMsg = data.error_msg
      console.log(errorMsg)
      this.setState({errorMessage: errorMsg})
    }
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password, errorMessage} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-bg">
        <div className="login-form-bg">
          <form
            className="login-form"
            onSubmit={this.userAuthenticationFetchApi}
          >
            <div className="login-form-top">
              <img
                src="https://res.cloudinary.com/dusiydn2q/image/upload/v1666697612/Tasty%20Kitchen/websiteLogo_cbloci.png"
                alt="website logo"
              />
              <h1 className="logo-name">Tasty Kitchens</h1>
              <h1>Login</h1>
            </div>
            <label className="login-form-label-name" htmlFor="username">
              USERNAME
            </label>
            <br />
            <input
              className="login-form-input"
              id="username"
              type="text"
              value={username}
              onChange={this.onChangeUserName}
            />
            <br />
            <label className="login-form-label-name" htmlFor="password">
              PASSWORD
            </label>
            <br />
            <input
              className="login-form-input"
              id="password"
              type="password"
              value={password}
              onChange={this.onChangePassword}
            />
            <br />
            <p className="login-form-error-message">{errorMessage}</p>
            <button type="submit" className="login-btn">
              Login
            </button>
          </form>
        </div>
        <img
          src="https://res.cloudinary.com/dusiydn2q/image/upload/v1666696316/login_image_hfwriy.png"
          alt="website login"
          className="loginImage"
        />
      </div>
    )
  }
}
export default Login
