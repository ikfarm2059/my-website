import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css';
import productData from '../data/productData';

function Products() {
  return (
    <div className="products-grid">
      {productData.map((product) => (
        <div className="product-item" key={product.name}>
          <div className={`product-background ${product.animationClass}`}>
            <img src={product.image} alt={product.alt} />
          </div>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <Link to="/sales" className="sales-link">購入ページへ</Link>
        </div>
      ))}
    </div>
  );
}

export default Products;
