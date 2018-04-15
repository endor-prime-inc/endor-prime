import React from 'react'
import {Route, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import AuthPrompt from './AuthPrompt'

const mapState = (state, ownProps) => {
  return {
    isLoggedIn: !!state.user.id,
    ...ownProps
  }
}

export const AuthRoute = ({isLoggedIn, ...rest}) => {
  return isLoggedIn
    ? <Route {...rest} />
    : <Route {...rest} component={AuthPrompt} />
}

export default withRouter(connect(mapState)(AuthRoute))
