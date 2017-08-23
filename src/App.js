import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Nav from './Components/Nav'
import Home from './Pages/Home'
import About from './Pages/About'

class App extends React.Component {
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
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App