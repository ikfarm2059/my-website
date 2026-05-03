import React from 'react';
import './InstagramLink.css';
import InstagramIcon from './InstagramIcon';
import { siteContent } from '../data/siteContent';

const InstagramLink = () => {
  return (
    <a href={siteContent.company.instagramUrl} target="_blank" rel="noopener noreferrer" className="instagram-icon-link">
      <InstagramIcon />
      <span>Instagram</span>
    </a>
  );
};

export default InstagramLink;
