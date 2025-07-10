import React from 'react';
import riceImage from '../assets/rice.jpg';
import wheatImage from '../assets/wheat.jpg';
import soyImage from '../assets/soy.jpg';

function Products() {
  return (
    <section id="products" className="section">
      <h2>生産物</h2>
      <div className="products-grid">
        <div className="product-item">
          <div className="product-background rice-animation">
            <img src={riceImage} alt="稲作" />
          </div>
          <h3>稲作</h3>
          <p>約100haの広大な土地で、太陽の光をたっぷり浴びた美味しいお米を育てています。</p>
        </div>
        <div className="product-item">
          <div className="product-background wheat-animation">
            <img src={wheatImage} alt="麦" />
          </div>
          <h3>麦</h3>
          <p>品質にこだわった麦を約100haの規模で栽培。様々な加工品へと姿を変えます。</p>
        </div>
        <div className="product-item">
          <div className="product-background soy-animation">
            <img src={soyImage} alt="大豆" />
          </div>
          <h3>大豆</h3>
          <p>栄養豊富な大豆を約100haの圃場で生産。日本の食卓に欠かせない食材です。</p>
        </div>
      </div>
    </section>
  );
}

export default Products;
