import React from 'react';
import { siteContent } from '../data/siteContent';

function AboutUs() {
  return (
    <div className="body-copy">
      {siteContent.about.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}

export default AboutUs;
