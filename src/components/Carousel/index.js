import './index.css'
import Cookies from 'js-cookie'
import {Component} from 'react'
import Slider from 'react-slick'
import Loader from 'react-loader-spinner'

class Carousel extends Component {
  state = {
    carouselImagesList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.fetchApiCarousel()
  }

  fetchApiCarousel = async () => {
    const jwtToken = Cookies.get('jwt_token')

    const url = 'https://apis.ccbp.in/restaurants-list/offers'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      const camelCasedData = data.offers.map(each => ({
        id: each.id,
        imageUrl: each.image_url,
      }))
      this.setState({carouselImagesList: camelCasedData, isLoading: false})
    }
  }

  loader = () => (
    // <div testid="restaurants-offers-loader" className="loader">
    <div className="loader">
      <Loader type="TailSpin" color="#F7931E" height={50} width={50} />
    </div>
  )

  carouselView = () => {
    const {carouselImagesList} = this.state
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    return (
      <div className="carousel-container">
        <Slider {...settings}>
          {carouselImagesList.map(each => (
            <div key={each.id}>
              <img src={each.imageUrl} alt="offer" className="carousel-image" />
            </div>
          ))}
        </Slider>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return isLoading ? this.loader() : this.carouselView()
  }
}
export default Carousel
