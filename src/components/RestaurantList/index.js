import './index.css'
import {Component} from 'react'
import Cookies from 'js-cookie'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
import Loader from 'react-loader-spinner'
import RestaurantItem from '../RestaurantItem'

class RestaurantList extends Component {
  state = {
    offset: 0,
    limit: 9,
    restaurantList: [],
    totalRestaurants: 0,
    isLoading: true,
  }

  componentDidMount() {
    this.fetchApiRestaurantList()
  }

  camelCasedUserRating = newData => ({
    rating: newData.rating,
    ratingColor: newData.rating_color,
    ratingText: newData.rating_text,
    totalReviews: newData.total_reviews,
  })

  fetchApiRestaurantList = async () => {
    const {offset, limit} = this.state
    const jwtToken = Cookies.get('jwt_token')

    const url = `https://apis.ccbp.in/restaurants-list?offset=${offset}&limit=${limit}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(response)
    console.log(data)
    if (response.ok) {
      const camelCasedData = data.restaurants.map(each => ({
        id: each.id,
        name: each.name,
        imageUrl: each.image_url,
        cuisine: each.cuisine,
        userRating: this.camelCasedUserRating(each.user_rating),
      }))
      const {total} = data
      this.setState({
        restaurantList: camelCasedData,
        totalRestaurants: total,
        isLoading: false,
      })
    }
  }

  Pagination = () => (
    <div className="pagination-container">
      <IoIosArrowBack className="arrow" type="button" />
      <p className="pagination-para">1 of 20</p>
      <IoIosArrowForward className="arrow" type="button" />
    </div>
  )

  restaurantListView = () => {
    const {restaurantList} = this.state
    // console.log(restaurantList)
    return (
      <div className="restaurant-container">
        <h1 className="restaurant-heading">Popular Restaurants</h1>
        <p className="restaurant-para">
          Select Your favourite restaurant special dish and make your day
          happy...
        </p>
        <hr />
        <ul className="restaurant-ul">
          {restaurantList.map(each => (
            <RestaurantItem details={each} key={each.id} />
          ))}
        </ul>
        {this.Pagination()}
      </div>
    )
  }

  loader = () => (
    // <div testid="restaurants-list-loader" className="loader">
    <div className="loader">
      <Loader type="TailSpin" color="#F7931E" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state

    return isLoading ? this.loader() : this.restaurantListView()
  }
}
export default RestaurantList
