import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AdminCategoryList from './AdminCategoryList';
import AdminCategoryAdd from './AdminCategoryAdd';
import AdminProductList from './AdminProductList';
import AdminOrderList from './AdminOrderList';
import AdminUserList from './AdminUserList';

const AdminRoutes = ({ match }) => (
  <Switch>
    <Route exact path={match.url + '/categories'} component={AdminCategoryList} />
    <Route path={match.url + '/categories/add'} component={AdminCategoryAdd} />
    <Route path={match.url + '/products'} component={AdminProductList} />
    <Route path={match.url + '/orders'} component={AdminOrderList} />
    <Route path={match.url + '/users'} component={AdminUserList} />
  </Switch>
);

export default AdminRoutes;
