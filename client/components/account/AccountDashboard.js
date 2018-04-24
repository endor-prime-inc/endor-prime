import React from 'react';
import AccountOrders from './AccountOrders';

const AccountDashboard = () => {
  return (
    <div id="account-dashboard" className="container">
      <h2>Account Dashboard</h2>
      <h3>Orders:</h3>
      <AccountOrders />
    </div>
  );
};

export default AccountDashboard;
