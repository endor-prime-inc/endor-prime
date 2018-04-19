import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {AdminRoute, AuthRoute, Login, Signup} from './auth'
import Welcome from './Welcome'
import Home from './Home'
import Admin from './Admin'
import NoMatch from './NoMatch'

console.log(AdminRoute);

const Routes = () => (
  <div className='fill-xy center-xy column'>
    <Switch>
      <Route exact path='/' component={Welcome} />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={Signup} />
      <AuthRoute path='/home' component={Home} />
      <AdminRoute path="/admin" component={Admin} />
      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default Routes
