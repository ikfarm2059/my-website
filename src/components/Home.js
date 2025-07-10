import React from 'react';
import Contact from './Contact';
import Products from './Products';
import WorkDaily from './WorkDaily';
import PresidentMessage from './PresidentMessage';

function Home() {
  return (
    <main>
      <section className="catchphrase-section">
        <div className="background-animation"></div>
        <h2>大地と、未来へ。</h2>
      </section>

      <section id="about" className="section">
        <h2>私たちについて</h2>
        <p>
          株式会社アイケーファームは、愛知県西尾市吉良町を拠点に、地域に根ざした農業を営んでいます。
          豊かな自然の恵みを生かし、皆様に安心して召し上がっていただける、高品質な作物の生産に努めています。
        </p>
      </section>

      <PresidentMessage />

      <Products />

      <WorkDaily />

      <Contact />

      <section id="company-info" className="section">
        <h2>会社情報</h2>
        <p>株式会社アイケーファーム</p>
        <p>住所: 愛知県西尾市吉良町饗庭西丁畑29-1</p>
        <p>電話: 0563-77-2059</p>
      </section>
    </main>
  );
}

export default Home;