import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import Section from './Section';
import AboutUs from './AboutUs';
import PresidentMessage from './PresidentMessage';
import Products from './Products';
import WorkDaily from './WorkDaily';
import CompanyMessage from './CompanyMessage';
import Contact from './Contact';
import CompanyInfo from './CompanyInfo';
import { siteContent } from '../data/siteContent';
import styles from './HomePage.module.css';

const HomePage = () => (
  <>
    <section className={styles.catchphrase_section}>
      <div className={styles.background_animation}></div>
      <div className={styles.catchphrase_inner}>
        <p>{siteContent.hero.locationLabel}</p>
        <h2>{siteContent.hero.title}</h2>
        <div className={styles.hero_recruit}>
          <span className={styles.hero_badge}>{siteContent.hero.recruitBadge}</span>
          <NavHashLink smooth to="/#company-message" className={styles.hero_cta}>
            {siteContent.hero.recruitCta}
          </NavHashLink>
        </div>
      </div>
    </section>

    <div id="about">
      <Section title={siteContent.sectionTitles.about}>
        <AboutUs />
      </Section>
      <PresidentMessage />
    </div>

    <Section id="products" title={siteContent.sectionTitles.products}>
      <Products />
    </Section>

    <Section id="work-daily" title={siteContent.sectionTitles.workDaily}>
      <WorkDaily />
    </Section>

    <Section id="company-message" title={siteContent.sectionTitles.recruitment} className="recruit">
      <CompanyMessage />
    </Section>

    <Section id="contact" title={siteContent.sectionTitles.contact}>
      <Contact />
    </Section>

    <Section id="company-info" title={siteContent.sectionTitles.companyInfo}>
      <CompanyInfo />
    </Section>
  </>
);

export default HomePage;
