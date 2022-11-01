import './index.css'
import {Component} from 'react'
import {FaStar} from 'react-icons/fa'
import FoodItems from '../FoodItems'

class RestaurantDetailsView extends Component {
  // state={
  //     isLoading:true
  // }

  restaurantDescription = () => {
    const {details} = this.props
    console.log(details)
    const {
      rating,
      id,
      name,
      costForTwo,
      cuisine,
      imageUrl,
      reviewsCount,
      opensAt,
      location,
      itemsCount,
      foodItems,
    } = details
    return (
      <div className="restaurant-des-container">
        <img src={imageUrl} alt="restaurant" className="rest-img" />
        <div className="rest-des-data">
          <h1 className="rest-dec-heading">{cuisine}</h1>
          <p className="rest-dec-para">{name}</p>
          <p className="rest-dec-para">{location}</p>
          <div className="rest-des-ratings">
            <div>
              <p className="rest-rating">
                {<FaStar />} {rating}
              </p>
              <p className="rest-rating-sub">{reviewsCount}+ Ratings</p>
            </div>

            <div>
              <p className="rest-rating">$ {costForTwo}</p>
              <p className="rest-rating-sub">cost for two</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    //   const {isLoading}
    const {details} = this.props
    const {foodItems} = details

    return (
      <div>
        {this.restaurantDescription()}
        <ul className="rest-ul-container">
          {foodItems.map(each => (
            <FoodItems foodItem={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default RestaurantDetailsView
