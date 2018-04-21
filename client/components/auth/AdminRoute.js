import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AdminPrompt from './AdminPrompt';

const mapState = (state, ownProps) => {
  return {
    isAdmin: !!state.user.id && !!state.user.isAdmin,
    ...ownProps
  };
};

// AdminRoute: works just a like a real route, except
// it's a bit smarter. If the user isn't logged in (which
// for our purposes means that state.user.id is a truthy value) or
// is not an admin, it will instead show a prompt telling the user
// he/she is not authorized to view the page.
export const AdminRoute = ({ isAdmin, ...rest }) => {
  return isAdmin ? (
    <Route {...rest} />
  ) : (
    <Route {...rest} component={AdminPrompt} />
  );
};

export default withRouter(connect(mapState)(AdminRoute));
