import React from 'react';
import { siteContent } from '../data/siteContent';

function Sales() {
  return (
    <section id="sales" className="section">
      <h2>{siteContent.sales.title}</h2>
      <p>{siteContent.sales.message}</p>
    </section>
  );
}

export default Sales;
