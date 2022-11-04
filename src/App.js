import './App.css'
import {Switch, Route, Redirect} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import RestaurantDetails from './components/RestaurantDetails'
import Cart from './components/Cart'
import PageNotFound from './components/PageNotFound'

// const sortByOptions = [
//   {
//     id: 0,
//     displayText: 'Highest',
//     value: 'Highest',
//   },
//   {
//     id: 2,
//     displayText: 'Lowest',
//     value: 'Lowest',
//   },
// ]

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />)
      <Route exact path="/login" component={Login} />
      <Route exact path="/restaurant/:id" component={RestaurantDetails} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/PageNotFound" component={PageNotFound} />
      <Redirect to="/PageNotFound" />
    </Switch>
  </>
)

export default App
