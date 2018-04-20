import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, Login, Signup } from './auth';
import Welcome from './Welcome';
import Account from './Account';
import NoMatch from './NoMatch';
import Products from './Products';
import ProductView from './ProductView';

const Routes = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <AuthRoute path="/account" component={Account} />
      <Route exact path="/products" component={Products} />
      <Route path="/products/:id" component={ProductView} />
      <Route component={NoMatch} />
    </Switch>
  </div>
);

export default Routes;
