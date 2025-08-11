import React from 'react';
import styles from './CompanyMessage.module.css';

function CompanyMessage() {
  return (
    <p>
      <span className={styles.highlight}>一緒に働いていただける方を募集しています</span><br />
      詳しい内容や詳細については メール または Instagram の DM<br />
      で気楽に相談 ください
    </p>
  );
}

export default CompanyMessage;
