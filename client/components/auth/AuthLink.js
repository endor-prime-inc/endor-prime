import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

const mapState = (state, ownProps) => {
  return {
    isLoggedIn: !!state.user.id,
    ...ownProps
  }
}

export const AuthRoute = ({isLoggedIn, to, children}) => {
  return isLoggedIn && <Link to={to}>{children}</Link>
}

export default withRouter(connect(mapState)(AuthRoute))
