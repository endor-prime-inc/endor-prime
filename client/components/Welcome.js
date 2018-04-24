import React from 'react';
import { Redirect } from 'react-router';

// Welcome: a landing page for unauthenticated users
const Welcome = () => <Redirect to={`/products`} />;

export default Welcome;
