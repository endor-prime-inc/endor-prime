import React from 'react';

import AdminNav from './AdminNav';
import AdminSearchbar from './AdminSearchbar';
import AdminRoutes from './AdminRoutes';

const AdminDashboard = props => {
  return (
  <div className="row">
    <div className="col-12">
      <AdminNav />
      <AdminSearchbar />
      <AdminRoutes {...props} />
    </div>
  </div>
  );
};

export default AdminDashboard;
