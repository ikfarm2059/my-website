import React from 'react';
import Contact from './Contact';
import Products from './Products';
import WorkDaily from './WorkDaily';
import CompanyMessage from './CompanyMessage';
import PresidentMessage from './PresidentMessage';
import CompanyInfo from './CompanyInfo';
import AboutUs from './AboutUs';

function Home() {
  return (
    <main>
      <section className="catchphrase-section">
        <div className="background-animation"></div>
        <h2>大地と、未来へ。</h2>
      </section>

      <AboutUs />

      <PresidentMessage />

      <Products />

      <WorkDaily />

      <CompanyMessage />

      <Contact />

      <CompanyInfo />
    </main>
  );
}

export default Home;