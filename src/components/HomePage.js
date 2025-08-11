import React from 'react';
import Section from './Section';
import AboutUs from './AboutUs';
import PresidentMessage from './PresidentMessage';
import Products from './Products';
import WorkDaily from './WorkDaily';
import CompanyMessage from './CompanyMessage';
import Contact from './Contact';
import CompanyInfo from './CompanyInfo';

const HomePage = () => (
  <>
    <section className="catchphrase-section">
      <div className="background-animation"></div>
      <h2>大地と、未来へ。</h2>
    </section>

    <div id="about">
      <Section title="私たちについて">
        <AboutUs />
      </Section>
      <PresidentMessage />
    </div>

    <Section id="products" title="生産物">
      <Products />
    </Section>

    <Section id="work-daily" title="Work Daily">
      <WorkDaily />
    </Section>

    <Section id="company-message" title="Message from IKfarm">
      <CompanyMessage />
    </Section>

    <Section id="contact" title="お問い合わせ">
      <Contact />
    </Section>

    <Section id="company-info" title="会社情報">
      <CompanyInfo />
    </Section>
  </>
);

export default HomePage;