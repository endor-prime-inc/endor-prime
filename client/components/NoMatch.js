import React from 'react';
import { Link } from 'react-router-dom';

// NoMatch: how did you even get here?
const NoMatch = () => (
  <div className="container text-center">
    <h4>A ship in port is safe; but that is not what ships are built for.</h4>
    <h4>
      Consider returning to <Link to="/">port</Link> though.
    </h4>
  </div>
);

export default NoMatch;
