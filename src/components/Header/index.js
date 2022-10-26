import './index.css'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'

const Header = () => {
  const logOut = () => {
    Cookies.remove('jwt_token')
  }

  return (
    <nav className="header-container">
      <Link to="/">
        <div className="header-log-container">
          <img
            src="https://res.cloudinary.com/dusiydn2q/image/upload/v1666697612/Tasty%20Kitchen/websiteLogo_cbloci.png"
            alt="website logo"
          />
          <h1 className="header-logo-name">Tasty Kitchens</h1>
        </div>
      </Link>
      <div className="header-names-container">
        <Link to="/" className="header-home">
          Home
        </Link>
        <Link to="/cart" className="header-cart">
          Cart
        </Link>
        <button type="button" className="header-logout-btn" onClick={logOut}>
          Logout
        </button>
      </div>
    </nav>
  )
}
export default Header
