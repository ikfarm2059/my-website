import React from 'react';
import './Section.css';

function Section({ id, title, children, className }) {
  const sectionClassName = className ? `section ${className}` : 'section';
  return (
    <section id={id} className={sectionClassName}>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
}

export default Section;