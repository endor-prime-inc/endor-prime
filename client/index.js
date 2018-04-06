import '@tmkelly28/tk-css'
import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <div id='demo' className='fill-xy bg-yellow black column center-xy'>
      <div>
        <div>Express&</div>
        <div>Sequelize&</div>
        <div>React&</div>
        <div>Redux.</div>
      </div>
    </div>
  </Provider>,
  document.getElementById('app')
)
