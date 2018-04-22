import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminNav = () => (
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <NavLink to="/admin/categories" className="nav-link">
        Categories
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink to="/admin/products" className="nav-link">
        Products
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink to="/admin/orders" className="nav-link">
        Orders
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink to="/admin/users" className="nav-link">
        Users
      </NavLink>
    </li>
  </ul>
);

export default AdminNav;
