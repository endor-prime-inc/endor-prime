import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { AuthLink, AdminLink, Logout } from './auth';

const mapState = (state, ownProps) => ({
  isLoggedIn: !!state.user.id,
  numItemsInCart: Object.keys(state.cart).length
});

const Navbar = ({isLoggedIn, numItemsInCart}) => (
  <nav className="navbar navbar-expand-md navbar-dark bg-dark">
    <Link to="/" className="navbar-brand">
      Endor Prime
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbar-supported-content"
      aria-controls="navbar-supported-content"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbar-supported-content">
      <ul className="navbar-nav mr-auto">
        {!isLoggedIn && (
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
        )}
        {!isLoggedIn && (
          <li className="nav-item">
            <Link to="/signup" className="nav-link">
              Signup
            </Link>
          </li>
        )}
        <li className="nav-item">
          <Link to="/cart" className="nav-link">
            Cart({numItemsInCart})
          </Link>
        </li>
        <li className="nav-item">
          <AuthLink to="/account" className="nav-link">
            Account
          </AuthLink>
        </li>
        <li className="nav-item">
          <AdminLink to="/admin" className="nav-link">
            Admin
          </AdminLink>
        </li>
        <li className="nav-item">
          <AuthLink to="/" className="nav-link">
            <Logout />
          </AuthLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default connect(mapState)(Navbar);
