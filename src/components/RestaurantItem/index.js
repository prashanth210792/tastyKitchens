import './index.css'
import {FaStar} from 'react-icons/fa'
import {withRouter} from 'react-router-dom'

const RestaurantItem = props => {
  const {details} = props
  const {id, name, imageUrl, cuisine, userRating} = details
  const {rating, totalReviews} = userRating
  //   console.log(imageUrl)

  const selectRestaurant = () => {
    const {history} = props
    history.push(`restaurant/${id}`)
  }
  return (
    <li className="restaurant-li" onClick={selectRestaurant}>
      <img src={imageUrl} alt="restaurant" className="restaurant-image" />
      <div className="restaurant-item-details">
        <h1 className="restaurant-item-heading">{name}</h1>
        <p className="restaurant-item-para">{cuisine}</p>
        <div>
          <p className="restaurant-item-rating">
            {<FaStar className="star" />} {rating}
            <span className="restaurant-item-total-ratings">
              ({totalReviews} rating)
            </span>
          </p>
        </div>
      </div>
    </li>
  )
}
export default withRouter(RestaurantItem)
