import './index.css'
import {Component} from 'react'
import Counter from '../Counter'

class CartItem extends Component {
  render() {
    const {details, cartItemRender} = this.props
    const {id, name, imageUrl, quantity, cost} = details
    const price = quantity * cost

    const renderState = () => {
      cartItemRender()
    }

    return (
      //   <li className="cartItem-li" testid="cartItem">
      <li className="cartItem-li">
        <div className="cartItem-img-container">
          <img src={imageUrl} alt="cartItem" className="cartItem-img" />
          <p className="cartItem-name">{name}</p>
        </div>
        <div className="cartItem-counter">
          <Counter
            id={id}
            renderState={renderState}
            testIds={[
              'decrement-quantity',
              'increment-quantity',
              'item-quantity',
            ]}
          />
        </div>
        <p className="cartItem-price">{price}</p>
      </li>
    )
  }
}
export default CartItem
