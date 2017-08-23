import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Home from './pages/Home'
import About from './pages/About'

const Nav = () => (
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
  </ul>
)

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
            <hr/>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App