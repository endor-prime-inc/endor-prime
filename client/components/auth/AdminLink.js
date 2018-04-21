import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapState = (state, ownProps) => {
  return {
    isAdmin: state.user.id && state.user.isAdmin,
    ...ownProps
  };
};

// AdminLink: works just like a Link, only it's smarter about
// the logged in user. Only admin users should see these
// types of links. We could even extend this pattern to include
// other kinds of permissions as well!
export const AdminLink = ({ isAdmin, to, children }) => {
  return isAdmin && <Link to={to}>{children}</Link>;
};

export default withRouter(connect(mapState)(AdminLink));
