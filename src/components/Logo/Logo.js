import React from 'react';
import logo from './logo.png';

const Logo = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'flex-start'}}>
      <img style={{ height: '100%', width: '80%', padding: '5px'}} alt='logo' src={logo} />
    </div>
  );
}

export default Logo; 