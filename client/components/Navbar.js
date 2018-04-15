import React from 'react'
import {Link} from 'react-router-dom'
import {AuthLink} from './auth'

const Navbar = () => (
  <nav className='row center-y'>
    <Link to='/'><img id='logo' src='/favicon.ico' /></Link>
    <Link to='/login'>Login</Link>
    <Link to='/signup'>Signup</Link>
    <AuthLink to='/home'>Home</AuthLink>
  </nav>
)

export default Navbar
