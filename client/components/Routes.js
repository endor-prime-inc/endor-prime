import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { AdminRoute, AuthRoute, Login, Signup } from './auth';

import Welcome from './Welcome';
import Account from './account/Account';
import AdminDashboard from './admin/AdminDashboard';
import NoMatch from './NoMatch';
import Products from './Products';
import ProductView from './ProductView';
import StoreToolbar from './StoreToolbar';
import Cart from './Cart';
import Checkout from './Checkout';
import ReviewProduct from './ReviewProduct';
import ProductEdit from './ProductEdit';

const Routes = () => (
  <div>
    <StoreToolbar />
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <AuthRoute path="/account" component={Account} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/products/:id" component={ProductView} />
      <AdminRoute exact path="/products/:id/edit" component={ProductEdit} />
      <AuthRoute
        exact
        path="/products/:id/add-review"
        component={ReviewProduct}
      />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/checkout" component={Checkout} />
      <AdminRoute path="/admin" component={AdminDashboard} />
      <Route component={NoMatch} />
    </Switch>
  </div>
);

export default Routes;
