import './App.css'
import {Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import RestaurantDetails from './components/RestaurantDetails'

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
  <Switch>
    <Route exact path="/" component={Home} />)
    <Route exact path="/login" component={Login} />
    <Route extat path="/restaurant/:id" component={RestaurantDetails} />
  </Switch>
)

export default App
