import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AccountDashboard from './AccountDashboard';
import AccountOrders from './AccountOrders';
import NoMatch from './NoMatch';

const Routes = () => (
  <div>
    <Switch>
      <Route exact path="/account/" component={AccountDashboard} />
      <Route path="/account/orders" component={AccountOrders} />
      <Route component={NoMatch} />
    </Switch>
  </div>
);

export default Routes;
