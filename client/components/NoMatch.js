import React from 'react'
import {Link} from 'react-router-dom'

// NoMatch: how did you even get here?
const NoMatch = () => (
  <div className='column'>
    <span>A ship in port is safe; but that is not what ships are built for.</span>
    <span>Consider returning to <Link to='/'>port</Link> though.</span>
  </div>
)

export default NoMatch
