
import React from 'react';

const Logo = () => {
  return (
    <div className="logo-container" data-aos="fade-down" data-aos-duration="1000">
      <svg 
        className="logo" 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="45" stroke="#FFFFFF" strokeWidth="2" />
        <path 
          d="M30 40L50 60L70 40" 
          stroke="#8A0303" 
          strokeWidth="6" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        <path 
          d="M30 60L50 80L70 60" 
          stroke="#FFFFFF" 
          strokeWidth="6" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
      </svg>
    </div>
  );
};

export default Logo;
