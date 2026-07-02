import React from 'react';
import Section from './Section';
import './PresidentMessage.css';
import { siteContent } from '../data/siteContent';
import president from '../assets/president.jpg';

function PresidentMessage() {
  return (
    <Section id="president" className="president-section">
      <img src={president} className="president-image" alt={siteContent.president.imageAlt} />
      <div className="president-message">
        <h2>{siteContent.president.title}</h2>
        <p>{siteContent.president.message}</p>
      </div>
    </Section>
  );
}

export default PresidentMessage;
