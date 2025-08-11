import React from 'react';
import './InstagramLink.css';
import InstagramIcon from './InstagramIcon';

const InstagramLink = () => {
  return (
    <a href="https://instagram.com/ikfarm2059" target="_blank" rel="noopener noreferrer" className="instagram-icon-link">
      <InstagramIcon />
      <span>Instagram</span>
    </a>
  );
};

export default InstagramLink;
