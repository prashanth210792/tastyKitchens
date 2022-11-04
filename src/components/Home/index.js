import './index.css'
import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import Carousel from '../Carousel'
import RestaurantList from '../RestaurantList'

class Home extends Component {
  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }
    return (
      <>
        <Header />
        <div className="home-center-area">
          <Carousel />
          <RestaurantList />
        </div>
        <Footer />
      </>
    )
  }
}
export default Home
