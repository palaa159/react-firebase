import React from 'react'
import { Link } from 'react-router-dom'
import * as Firebase from '../services/firebase'
import './Nav.css'

class Nav extends React.Component {

  state = {
    isBurgerOpen: false
  }

  async FBLogin () {
    const result = await Firebase.login()
    console.log(result)
  }

  async logout () {
    const result = await Firebase.logout()
    console.log(result)
  }

  toggleBurger () {
    this.setState({
      isBurgerOpen: !this.state.isBurgerOpen
    })
  }

  render () {
    let burgerOpen = (this.state.isBurgerOpen)? 'is-active': ''
    return (
      <nav className="navbar">
        <div className="navbar-brand">
          <div className="navbar-item">
            <div>
              <span className="is-size-4">
                Good Karma 💯
              </span>
            </div>
          </div>
    
          <div className="navbar-burger" data-target="navMenu" onClick={() => this.toggleBurger()}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
    
        <div id="navMenu" className={`navbar-menu ${burgerOpen}`} style={{ paddingTop: 0 }}>
          <div className="navbar-start">
            <Link to="/" className="navbar-item">
              <span role="img" aria-label="...">📰 </span>
              Feed
            </Link>
            <Link to="/map" className="navbar-item">
              <span role="img" aria-label="...">🗺 </span>
              Map
            </Link>
            <Link to="/record" className="navbar-item">
              <span role="img" aria-label="...">⏺ </span>
              Record
            </Link>
            <Link to="/profile" className="navbar-item">
              <span role="img" aria-label="...">🤺 </span>
              Profile
            </Link>
          </div>
    
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <button className="button is-info" onClick={() => this.FBLogin()}>
                    <span className="icon">
                      <i className="fa fa-lock"></i>
                    </span>
                    <span>Login</span>
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav