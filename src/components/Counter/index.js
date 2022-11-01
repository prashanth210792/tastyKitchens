import {Component} from 'react'

import './index.css'

class Counter extends Component {
  render() {
    return (
      <div className="counter-container">
        <button
          type="button"
          className="counter-btn"
          onClick={this.onDecrement}
        >
          -
        </button>
        <div>0</div>
        <button
          type="button"
          className="counter-btn"
          onClick={this.onIncrement}
        >
          +
        </button>
      </div>
    )
  }
}

export default Counter
