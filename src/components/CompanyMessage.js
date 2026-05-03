import React from 'react';
import { siteContent } from '../data/siteContent';
import styles from './CompanyMessage.module.css';

function CompanyMessage() {
  return (
    <div className="body-copy">
      <p className={styles.highlight}>{siteContent.recruitment.lead}</p>
      {siteContent.recruitment.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}

export default CompanyMessage;
