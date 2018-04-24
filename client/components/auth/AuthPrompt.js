import React from 'react';
import { Link } from 'react-router-dom';

const AuthPrompt = () => (
  <div className="container text-center">
    <h4>It is much easier to apologize than it is to get permission.</h4>
    <h4>Still, you need permission.</h4>
    <h4>
      Please <Link to="/login">login</Link> to continue.
    </h4>
  </div>
);

export default AuthPrompt;
