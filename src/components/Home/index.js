import './index.css'
import {Component} from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Carousel from '../Carousel'
import RestaurantList from '../RestaurantList'

class Home extends Component {
  render() {
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
