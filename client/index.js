import '@tmkelly28/tk-css'
import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <div id='demo' className='fill-xy bg-purple white column center-xy'>
      <div>
        <div>Actions&</div>
        <div>Reducers&</div>
        <div>Middleware&</div>
        <div>Redux.</div>
      </div>
    </div>
  </Provider>,
  document.getElementById('app')
)
