import './index.css'
import {Link} from 'react-router-dom'

// const goHomePage = () => {
//   const {history} = this.props
//   history.push('/')
// }

const PageNotFound = () => (
  <div className="cart-orderPlaced-container">
    <img
      src="https://res.cloudinary.com/dusiydn2q/image/upload/v1667458599/Tasty%20Kitchen/erroring_1_vbio4c.png"
      alt="not found"
      className="empty-cart-image"
    />
    <h1 className="cart-payment-para">Page Not Found</h1>
    <p className="cart-payment-para2">
      We are sorry, the page you requested could not be found.
      <br />
      Please go back to the homepage
    </p>
    <Link to="/">
      {/* <button className="cart-btn" type="button" onClick={goHomePage}> */}
      <button className="cart-btn" type="button">
        Home Page
      </button>
    </Link>
  </div>
)
export default PageNotFound
