import React from 'react';
import { siteContent } from '../data/siteContent';

function Contact() {
  return (
    <>
      <p>{siteContent.contact.message}</p>
      <p><a href={`mailto:${siteContent.company.email}`}>{siteContent.company.email}</a></p>
    </>
  );
}

export default Contact;
