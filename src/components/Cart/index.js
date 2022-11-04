import './index.css'
import Cookies from 'js-cookie'
import {Link, Redirect} from 'react-router-dom'
import {Component} from 'react'
import Header from '../Header'
import Footer from '../Footer'
import CartItem from '../CartItem'

class Cart extends Component {
  state = {
    data: null,
    isOrderPlaced: false,
  }

  cartItemRender = () => {
    this.setState(prevState => ({
      data: prevState.data,
    }))
  }

  orderPlaced = () => {
    this.setState({isOrderPlaced: true})
  }

  goHomePage = () => {
    const {history} = this.props
    history.push('/')
  }

  fullCartView = (cartData, totalPrice) => (
    <div className="cart-container">
      <ul className="cart-ul">
        <li className="cart-li-header">
          <p className="cart-para">Item</p>
          <p className="cart-para">Quantity</p>
          <p className="cart-para">Price</p>
        </li>
        {cartData.map(each => (
          <CartItem
            details={each}
            key={each.id}
            cartItemRender={this.cartItemRender}
          />
        ))}
      </ul>
      <hr />

      <div className="cart-total-order">
        <h1>Order Total:</h1>
        <p testid="total-price"> ₹ {totalPrice}</p>
        {/* <p> ₹ {totalPrice}</p> */}
      </div>
      <div className="cart-btn-container">
        <button className="cart-btn" type="button" onClick={this.orderPlaced}>
          Place Order
        </button>
      </div>
      <Footer />
    </div>
  )

  emptyCartView = () => (
    <div className="cart-orderPlaced-container">
      <img
        src="https://res.cloudinary.com/dusiydn2q/image/upload/v1667457789/Tasty%20Kitchen/cooking_1_wrsbtz.png"
        alt="empty cart"
        className="empty-cart-image"
      />
      <h1 className="cart-payment-para">No Order Yet!</h1>
      <p className="cart-payment-para2">
        Your cart is empty. Add something from the menu.
      </p>
      {/* <button className="cart-btn" type="button" onClick={this.goHomePage}> */}
      <Link to="/">
        <button className="cart-btn" type="button">
          Order Now
        </button>
      </Link>
    </div>
  )

  cartView = () => {
    const cartData = JSON.parse(localStorage.getItem('cartData'))
    const totalCosts = cartData.map(each => each.cost * each.quantity)
    const totalPrice = totalCosts.reduce((a, b) => a + b, 0)
    // console.log(totalCosts)
    // console.log(totalPrice)

    return cartData.length === 0
      ? this.emptyCartView()
      : this.fullCartView(cartData, totalPrice)
  }

  orderPlacedView = () => (
    <div className="cart-orderPlaced-container">
      <img
        src="https://res.cloudinary.com/dusiydn2q/image/upload/v1667394526/Tasty%20Kitchen/VectortickLogo_pmnru2.png"
        alt="logo"
      />
      <h1 className="cart-payment-para">Payment Successful</h1>
      <p className="cart-payment-para2">
        Thank you for ordering Your payment is successfully completed.
        {/* Thank you for ordering
        <br />
        Your payment is successfully completed. */}
      </p>
      {/* <button className="cart-btn" type="button" onClick={this.goHomePage}> */}
      <Link to="/">
        <button className="cart-btn" type="button" onClick={this.goHomePage}>
          Go To Home Page
        </button>
      </Link>
    </div>
  )

  render() {
    const {isOrderPlaced} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }

    return (
      <>
        <Header />
        {isOrderPlaced ? this.orderPlacedView() : this.cartView()}
      </>
    )
  }
}
export default Cart
