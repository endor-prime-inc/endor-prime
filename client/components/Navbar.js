import React from 'react';
import { Link } from 'react-router-dom';
import { AuthLink, Logout } from './auth';

class Navbar extends React.Component {
  state = {
    expanded: true
  };

  render() {
    return (
      <nav className="navbar navbar-expand-md">
        <Link to="/" className="navbar-brand">
          Endor Prime
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse" data-target="#navbar-supported-content" aria-controls="navbar-supported-content" aria-expanded="false" aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbar-supported-content">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="nav-link">Signup</Link>
            </li>
            <li className="nav-item">
              <AuthLink to="/home" className="nav-link">Home</AuthLink>
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
  }
}

export default Navbar;
