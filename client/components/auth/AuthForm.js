import React from 'react'

const AuthForm = ({type, handleSubmit, error}) => (
  <form onSubmit={handleSubmit}>

    <div className='column'>
      <label htmlFor='email'>Email</label>
      <input type='email' name='email' />
    </div>

    <div className='column'>
      <label htmlFor='password'>Password</label>
      <input type='password' name='password' />
    </div>

    <button type='submit'>{type}</button>
    {error && <div>{error}</div>}
  </form>
)

export default AuthForm
