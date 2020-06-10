import React from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { isAuthenticated, logout } from '../../lib/auth'

function Navbar() {
  const [authenticated, setAuthenticated] = React.useState(isAuthenticated())
  const { pathname } = useLocation()
  const history = useHistory()

  const handleLogout = () => {
    logout()
    history.push('/')
  }

  React.useEffect(() => {
    setAuthenticated(isAuthenticated())
  }, [pathname])

  return (
    <nav>
      <div className="main-nav">
        <div className="left-nav">
          <Link className="nav-item" to="/">Home</Link>
        </div>
        <div className="right-nav">
          {authenticated && <Link className="nav-item" to="/findlove">Find Love</Link>}
          {authenticated && <Link className="nav-item" to='/myprofile'>My Profile</Link>}
          {!authenticated && <Link className="nav-item" to="/login">Login</Link>}
          {!authenticated && <Link className="nav-item" to="/register">Sign up</Link>}
          {authenticated && <span className="nav-item" onClick={handleLogout}>Log Out</span>}
        </div>
      </div>
    </nav>
  )
}

export default Navbar