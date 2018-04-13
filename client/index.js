import '@tmkelly28/tk-css'
import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import {Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'
import history from './history'
import Main from './components'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Main />
    </Router>
  </Provider>,
  document.getElementById('app')
)
