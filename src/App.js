import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import * as Firebase from './services/firebase'
import Nav from './Components/Nav'
import Feed from './Pages/Feed'
import Map from './Pages/Map'
import Record from './Pages/Record'

class App extends React.Component {

  componentWillMount() {
    Firebase.init()
  }

  render () {
    return (
      <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Web App 2017</title>
            <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <BrowserRouter>
          <div>
            <Nav />
            <Route exact path="/" component={Feed}/>
            <Route path="/map" component={Map}/>
            <Route path="/record" component={Record}/>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App