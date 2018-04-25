import React from 'react';
import { Link } from 'react-router-dom';

const AdminPrompt = () => (
  <div className="container text-center">
    <h4>
      Even if we let you in here, the server would not let you do anything
      useful.
    </h4>
    <h4>
      Please go <Link to="/">home</Link> and don't wander too far.
    </h4>
  </div>
);

export default AdminPrompt;
