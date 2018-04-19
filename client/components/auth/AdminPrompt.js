import React from 'react';
import { Link } from 'react-router-dom';

const AdminPrompt = () => (
  <div className="column">
    <span>Even if we let you in here, the server would not let you do</span>
    <span>anything useful.</span>
    <span>
      Please go <Link to="/">home</Link> and don't wander too far.
    </span>
  </div>
);

export default AdminPrompt;
