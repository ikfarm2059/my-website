import React from 'react';
import Section from './Section';
import { siteContent } from '../data/siteContent';

function Sales() {
  return (
    <Section id="sales" title={siteContent.sales.title}>
      <p>{siteContent.sales.message}</p>
    </Section>
  );
}

export default Sales;
