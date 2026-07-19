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
      <ul className={styles.points}>
        {siteContent.recruitment.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <p className={styles.note}>{siteContent.recruitment.note}</p>
      <div className={styles.ctaRow}>
        <a
          className={styles.ctaPrimary}
          href={`mailto:${siteContent.company.email}`}
        >
          {siteContent.recruitment.ctaEmail}
        </a>
        <a
          className={styles.ctaSecondary}
          href={siteContent.company.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {siteContent.recruitment.ctaInstagram}
        </a>
      </div>
    </div>
  );
}

export default CompanyMessage;
