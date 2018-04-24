import React from 'react';

const GoogleLogin = props => {
  return (
    <form method="get" action="/auth/google">
      <button type="submit" className="btn btn-secondary">
        Login with Google
      </button>
    </form>
  );
};

export default GoogleLogin;
