import './index.css'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

const Header = props => {
  const logOut = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <nav className="header-container">
      <div className="header-log-container">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dusiydn2q/image/upload/v1666697612/Tasty%20Kitchen/websiteLogo_cbloci.png"
            alt="website logo"
          />
        </Link>
        <h1 className="header-logo-name">Tasty Kitchens</h1>
      </div>

      <ul className="header-names-container">
        <Link to="/" className="header-home">
          <li>Home</li>
        </Link>
        <Link to="/cart" className="header-cart">
          <li>Cart</li>
        </Link>
        <button type="button" className="header-logout-btn" onClick={logOut}>
          Logout
        </button>
      </ul>
    </nav>
  )
}
export default withRouter(Header)
