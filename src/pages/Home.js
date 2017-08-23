import React from 'react'

class Home extends React.Component {

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
            <h2>Home</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipsisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam.
            </p>
            <div className="button is-medium" onClick={() => this.showAlert()}>Click Me!</div>
            <div className="button is-medium" onClick={() => this.increase()}>Increase</div>
            <h3>Counter: {this.state.counter}</h3>
          </div>
        </div>
      </div>
    )
  }
}

export default Home