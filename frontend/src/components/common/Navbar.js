import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { isAuthenticated, logout } from '../../lib/auth'

function Navbar() {
  const history = useHistory()

  const handleLogout = () => {
    logout()
    history.push('/')
  }

  return (
    <nav>
      <div className="main-nav">
        <div className="left-nav">
          <Link className="nav-item"to="/">Home</Link>
        </div>
        <div className="right-nav">
          {isAuthenticated() && <Link className="nav-item" to='/myprofile'>My Profile</Link>}
          {!isAuthenticated() && <Link className="nav-item" to="/login">Login</Link>}
          {!isAuthenticated() && <Link className="nav-item" to="/register">Sign up</Link>}
          {isAuthenticated() && <span className="nav-item" onClick={handleLogout}>Log Out</span>}
        </div>
      </div>
    </nav>
  )
}

export default Navbar