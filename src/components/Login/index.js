import './index.css'
import {Component} from 'react'

class Login extends Component {
  render() {
    return (
      <div className="login-bg">
        <div className="login-form-bg">
          <form className="login-form">
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
            <input className="login-form-input" id="username" type="text" />
            <br />
            <label className="login-form-label-name" htmlFor="username">
              PASSWORD
            </label>
            <br />
            <input className="login-form-input" id="PASSWORD" type="text" />
            <br />
            <button className="login-btn" type="button">
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
