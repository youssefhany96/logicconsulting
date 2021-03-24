import React from 'react';

const Navigation = () => {
  return(
    <nav style={{display: 'flex', justifyContent: 'center'}}>
      <p className='f3 link dim black underline pa3 pointer'>Industries</p>
      <p className='f3 link dim black underline pa3 pointer'>Consulting Services</p>
      <p className='f3 link dim black underline pa3 pointer'>Insights</p>
      <p className='f3 link dim black underline pa3 pointer'>About Us</p>
      <p className='f3 link dim black underline pa3 pointer'>Careers</p>
    </nav>
  );    
}

export default Navigation; 