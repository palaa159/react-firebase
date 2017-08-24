import React from 'react'
import FeedCard from '../Components/FeedCard'

class Feed extends React.Component {

  state = {
    counter: 0
  }

  showAlert () {
    alert('HEY!')
  }

  increase () {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render () {
    return (
      <div className="section container">
        <div className="columns is-mobile">
          <div className="column">
            <h3 className="title">
              <span aria-label="." role="img">🍻 </span> 
              Feed
            </h3>
          </div>
          <div className="column">
            <button className="button is-pulled-right is-primary">
              <span>😛 Add yours</span>
            </button>
          </div>
        </div>

        <div className="columns">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>

      </div>
    )
  }
}

export default Feed