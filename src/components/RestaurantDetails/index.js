import './index.css'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {Component} from 'react'
import Header from '../Header'
import Footer from '../Footer'
import RestaurantDetailsView from '../RestaurantDetailsView'

class RestaurantDetails extends Component {
  state = {
    isLoading: true,
    fetchedRestaurantDetails: null,
  }

  componentDidMount() {
    this.fetchApiRestaurantDetails()
  }

  camelCaseFoodItem = item => {
    const result = item.map(each => ({
      name: each.name,
      cost: each.cost,
      foodType: each.food_type,
      imageUrl: each.image_url,
      id: each.id,
    }))
    return result
  }

  fetchApiRestaurantDetails = async () => {
    // console.log(this.props)
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/restaurants-list/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()

    if (response.ok) {
      const restDetails = {
        rating: data.rating,
        id: data.id,
        name: data.name,
        costForTwo: data.cost_for_two,
        cuisine: data.cuisine,
        imageUrl: data.image_url,
        reviewsCount: data.reviews_count,
        opensAt: data.opens_at,
        location: data.location,
        itemsCount: data.items_count,
        foodItems: this.camelCaseFoodItem(data.food_items),
      }
      console.log(restDetails)
      this.setState({fetchedRestaurantDetails: restDetails, isLoading: false})
    }
  }

  loader = () => (
    //   <div testid="restaurant-details-loader" className="loader">
    <div className="loader">
      <Loader type="TailSpin" color="#F7931E" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading, fetchedRestaurantDetails} = this.state
    return (
      <>
        <Header />
        {isLoading ? (
          this.loader
        ) : (
          <RestaurantDetailsView details={fetchedRestaurantDetails} />
        )}
        <Footer />
      </>
    )
  }
}
export default RestaurantDetails
