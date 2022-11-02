import './index.css'
import {Component} from 'react'
import Header from '../Header'
import Footer from '../Footer'
import CartItem from '../CartItem'

class Cart extends Component {
  state = {
    data: null,
  }

  //   componentDidMount() {
  //     this.getLocalData()
  //   }

  //   getLocalData = () => {
  //     const cartData = JSON.parse(localStorage.getItem('cartData'))
  //     this.setState({localData: cartData})
  //   }

  cartItemRender = () => {
    this.setState(prevState => ({
      data: prevState.data,
    }))
  }

  render() {
    //   const{localData}=this.state
    const cartData = JSON.parse(localStorage.getItem('cartData'))
    const totalCosts = cartData.map(each => each.cost * each.quantity)
    const totalPrice = totalCosts.reduce((a, b) => a + b, 0)
    console.log(totalCosts)
    console.log(totalPrice)
    return (
      <>
        <Header />
        <div className="cart-container">
          <ul className="cart-ul">
            <li className="cart-li-header">
              <p>Item</p>
              <p>Quantity</p>
              <p>Price</p>
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
            <p>Order Total:</p>
            <p> $ {totalPrice}</p>
          </div>
          <div className="cart-btn-container">
            <button className="cart-btn" type="button">
              Place Order
            </button>
          </div>
        </div>

        <Footer />
      </>
    )
  }
}
export default Cart
