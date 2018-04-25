import React from 'react';

import AdminNav from './AdminNav';
import AdminSearchbar from './AdminSearchbar';
import AdminRoutes from './AdminRoutes';

const AdminDashboard = props => {
  return (
    <div className="container">
      <AdminNav />
      <AdminSearchbar />
      <AdminRoutes {...props} />
    </div>
  );
};

export default AdminDashboard;
