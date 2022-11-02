import './index.css'
import {Component} from 'react'
import Counter from '../Counter'

class FoodItems extends Component {
  //   localStorage.setItem('cartData', JSON.stringify([]))
  state = {
    localData: [],
  }

  componentDidMount() {
    this.callState()
  }

  callState = () => {
    const cartData = JSON.parse(localStorage.getItem('cartData'))
    this.setState({localData: cartData})
  }

  addItem = () => {
    const {foodItem} = this.props
    const {id, cost, foodType, name, imageUrl} = foodItem
    const cartData = JSON.parse(localStorage.getItem('cartData'))
    const checkId = cartData.filter(each => each.id === id)

    if (checkId.length === 0) {
      cartData.push({
        cost,
        quantity: 1,
        id,
        imageUrl,
        name,
      })
      localStorage.setItem('cartData', JSON.stringify(cartData))
    }
    this.callState()
  }

  addBtn = () => (
    <button type="button" className="food-item-btn" onClick={this.addItem}>
      ADD
    </button>
  )

  renderState = () => {
    this.setState(prevState => ({
      localData: prevState.localData,
    }))
  }

  render() {
    const {localData} = this.state
    const {foodItem} = this.props
    const {id, cost, foodType, name, imageUrl} = foodItem

    const checkId = localData.filter(each => each.id === id)

    return (
      // <li className="food-item-li" testid="foodItem">
      <li className="food-item-li">
        <img src={imageUrl} alt="foodItem" className="food-item-img" />
        <div className="food-item-desc">
          <h1 className="food-item-h1">{name}</h1>
          <p className="food-item-cost">$ {cost}</p>
          {/* <p>{}</p> */}
          {checkId[0] === undefined ? (
            this.addBtn()
          ) : (
            <Counter id={id} renderState={this.renderState} />
          )}
        </div>
      </li>
    )
  }
}
export default FoodItems
