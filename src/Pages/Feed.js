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
      <div className="section">
        <div className="container is-fluid">
          <div className="content">
            <h3 className="title">
              <span aria-label="." role="img">🍶 </span> 
              Feed
            </h3>
          </div>
        </div>

        <div className="container">
          <div className="columns">
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
          </div>
        </div>

      </div>
    )
  }
}

export default Feed