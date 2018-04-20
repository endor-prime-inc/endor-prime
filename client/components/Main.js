import React from 'react';
import Routes from './Routes';
import Navbar from './Navbar';

const Main = () => {
  return (
    <div className="container-fluid">
      <Navbar />
      <Routes />
    </div>
  );
};

export default Main;
