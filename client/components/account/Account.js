import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AccountDashboard from './AccountDashboard';
import AccountOrders from './AccountOrders';
import OrderView from '../OrderView';
import NoMatch from '../NoMatch';

const Routes = () => (
  <div>
    <Switch>
      <Route exact path="/account/" component={AccountDashboard} />
      <Route exact path="/account/orders" component={AccountOrders} />
      <Route path="/account/orders/:id" component={OrderView} />
      <Route component={NoMatch} />
    </Switch>
  </div>
);

export default Routes;
