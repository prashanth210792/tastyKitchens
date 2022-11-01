import './index.css'
import Counter from '../Counter'

const FoodItems = props => {
  const {foodItem} = props
  const {id, cost, foodType, name, imageUrl} = foodItem

  localStorage.setItem('cartData', JSON.stringify([]))

  const addItem = () => {
    const cartData = localStorage.getItem('cartData')
    console.log(cartData)
    // localStorage.setItem()
  }

  return (
    // <li className="food-item-li" testid="foodItem">
    <li className="food-item-li">
      <img src={imageUrl} alt="foodItem" className="food-item-img" />
      <div className="food-item-desc">
        <h1 className="food-item-h1">{name}</h1>
        <p className="food-item-cost">$ {cost}</p>
        {/* <p>{}</p> */}
        <button type="button" className="food-item-btn" onClick={addItem}>
          ADD
        </button>
        <Counter />
      </div>
    </li>
  )
}
export default FoodItems
