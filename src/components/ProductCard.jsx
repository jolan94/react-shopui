import React from 'react';
import '../index.css';

function ProductCard() {
  return (
    <div className="product-card">
      <img
        src="placeholder-image.jpg"
        alt="Product"
        className="product-image"
      />
      <h3 className="product-title">Product Title</h3>
      <div className="product-rating">Rating: 4.5</div>
      <div className="product-price">$99.99</div>
      <button className="buy-button">Buy Now</button>
    </div>
  );
}

export default ProductCard;
