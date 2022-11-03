import './index.css'

const goHomePage = () => {
  const {history} = this.props
  history.push('/')
}

const PageNotFound = () => (
  <div className="cart-orderPlaced-container">
    <img
      src="https://res.cloudinary.com/dusiydn2q/image/upload/v1667458599/Tasty%20Kitchen/erroring_1_vbio4c.png"
      alt="not found"
      className="empty-cart-image"
    />
    <p className="cart-payment-para">Page Not Found</p>
    <p className="cart-payment-para2">
      We are sorry, the page you requested could not be found.
      <br />
      Please go back to the homepage
    </p>
    <button className="cart-btn" type="button" onClick={goHomePage}>
      Order Now
    </button>
  </div>
)
export default PageNotFound
