import React from 'react';
import { siteContent } from '../data/siteContent';

function CompanyInfo() {
  return (
    <>
      <p>{siteContent.company.name}</p>
      <p>所在地: <a href={siteContent.company.mapUrl} target="_blank" rel="noopener noreferrer">{siteContent.company.address}</a></p>
      <p>電話番号: {siteContent.company.phone}</p>
    </>
  );
}

export default CompanyInfo;
