import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

const mapState = (state, ownProps) => {
  return {
    isLoggedIn: !!state.user.id,
    ...ownProps
  }
}

// AuthLink: works just like a Link, only it's smarter about
// the logged in user. Only logged in users should see these
// types of links. We could even extend this pattern to include
// other kinds of permissions as well!
export const AuthLink = ({isLoggedIn, to, children, className}) => {
  return isLoggedIn && <Link to={to} className={className}>{children}</Link>
}

export default withRouter(connect(mapState)(AuthLink))
