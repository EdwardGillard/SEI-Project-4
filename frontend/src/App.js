import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import UserDashboard from './components/user/UserDashboard'
import FindLove from './components/user/FindLove'
import ShowUser from './components/user/ShowUser'
import EditProfile from './components/user/EditProfile'
import Error from './components/common/Error'
import Footer from './components/common/Footer'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/myprofile/edit' component={EditProfile} />
        <Route path='/myprofile' component={UserDashboard} />
        <Route path='/findlove' component={FindLove} />
        <Route path='/profile/:username' component={ShowUser} />
        <Route path='/*' component={Error} />
      </Switch>
      <Footer className="Footer" />
    </BrowserRouter>
  )
}

export default App
