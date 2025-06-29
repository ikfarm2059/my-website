import React from 'react';
import './App.css';
import logo from './logo.jpg';
import president from './president.jpg';
import riceImage from './rice.jpg';
import wheatImage from './wheat.jpg';
import soyImage from './soy.jpg';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>株式会社アイケーファーム</h1>
      </header>

      <section className="catchphrase-section">
        <div className="background-animation"></div>
        <h2>大地と、未来へ。</h2>
      </section>

      <main>
        <section id="about" className="section">
          <h2>私たちについて</h2>
          <p>
            株式会社アイケーファームは、愛知県西尾市吉良町を拠点に、地域に根ざした農業を営んでいます。
            豊かな自然の恵みを生かし、皆様に安心して召し上がっていただける、高品質な作物の生産に努めています。
          </p>
        </section>

        <section id="products" className="section">
          <h2>生産物</h2>
          <div className="products-grid">
            <div className="product-item">
              <div className="product-background rice-animation">
                <img src={riceImage} alt="稲作" />
              </div>
              <h3>稲作</h3>
              <p>80haの広大な土地で、太陽の光をたっぷり浴びた美味しいお米を育てています。</p>
            </div>
            <div className="product-item">
              <div className="product-background wheat-animation">
                <img src={wheatImage} alt="麦" />
              </div>
              <h3>麦</h3>
              <p>品質にこだわった麦を80haの規模で栽培。様々な加工品へと姿を変えます。</p>
            </div>
            <div className="product-item">
              <div className="product-background soy-animation">
                <img src={soyImage} alt="大豆" />
              </div>
              <h3>大豆</h3>
              <p>栄養豊富な大豆を80haの畑で生産。日本の食卓に欠かせない食材です。</p>
            </div>
          </div>
        </section>

        <section id="president" className="section president-section">
          <img src={president} className="president-image" alt="社長" />
          <div className="president-message">
            <h2>代表メッセージ</h2>
            <p>
              私たちは、ただ作物を作るだけでなく、食を通じて人々の暮らしと地域の未来を豊かにすることを目指しています。
              一杯のご飯、一杯の味噌汁が、皆様の笑顔の源となるように。そんな想いを込めて、日々土と向き合っています。
            </p>
          </div>
        </section>

        <section id="contact" className="section">
          <h2>会社情報</h2>
          <p>株式会社アイケーファーム</p>
          <p>住所: 愛知県西尾市吉良町饗庭西丁畑29-1</p>
          <p>電話: 0563-77-2059</p>
        </section>
      </main>

      <footer className="App-footer">
        <p>&copy; 2025 IK-FARM Inc. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;