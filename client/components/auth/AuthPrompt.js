import React from 'react';
import { Link } from 'react-router-dom';

const AuthPrompt = () => (
  <div className="column">
    <span>It is much easier to apologize than it is to get permission.</span>
    <span>Still, you need permission.</span>
    <span>
      Please <Link to="/login">login</Link> to continue.
    </span>
  </div>
);

export default AuthPrompt;
