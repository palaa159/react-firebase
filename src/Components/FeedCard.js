import React from 'react'

class FeedCard extends React.Component {
  render () {
    return (
      <div className="card" style={{ margin: 10, marginBottom: 20 }}>
        <div className="card-content">
          <p className="title is-size-6">
            "There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors."
          </p>
          <p className="subtitle is-size-6 is-pulled-right">
            Jeff Atwood
          </p>
        </div>
        <footer className="card-footer">
          <a className="card-footer-item">
            <span className="is-size-5" aria-label="." role="img">❤️</span>
          </a>
          <a className="card-footer-item">
            <span className="is-size-5" aria-label="." role="img">🖐</span>
          </a>
        </footer>
      </div>      
    )
  }
}

export default FeedCard