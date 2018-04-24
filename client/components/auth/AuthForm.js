import React from 'react';
import GoogleLogin from './GoogleLogin';

const AuthForm = ({ type, handleSubmit, error }) => (
  <div className="container">
    <div className="row">
      <div className="col-12 text-center">
        <h2>Login</h2>
      </div>
    </div>
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-4" />
        <div className="col-md-4 mt-2">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" className="form-control" />
        </div>
        <div className="col-md-4" />
        <div className="col-md-4" />
        <div className="col-md-4 mt-2">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" className="form-control" />
        </div>
        <div className="col-md-4" />
        <div className="col-md-4" />
        <div className="col-md-4 mt-3 text-center">
          <button type="submit" className="btn btn-primary">
            {type}
          </button>
          {error && <div>{error}</div>}
        </div>
      </div>
    </form>
    <div className="row">
      <div className="col-md-4" />
      <div className="col-md-4 mt-3 text-center">
        <hr className="p-0 m-0" />
      </div>
      <div className="col-md-4" />
      <div className="col-md-4" />
      <div className="col-md-4 mt-3 text-center">
        <GoogleLogin />
      </div>
      <div className="col-md-4" />
    </div>
  </div>
);

export default AuthForm;
