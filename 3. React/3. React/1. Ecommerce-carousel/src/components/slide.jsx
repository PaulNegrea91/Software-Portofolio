import React from 'react';
import './slide.css';

const Slide = ({ product }) => {
  return (
    <>
    <div className="slide">
      <img src={product.image} alt={product.name} className="product-image" />
    </div>
      <div className="info">
      <h2 className="product-name">{product.name}</h2>
      <p className="product-price">Original Price: ${product.original_price}</p>
      <p className="product-discounted-price">Discounted Price: ${product.discounted_price}</p>
      <button className="add-to-cart-btn">Add to cart</button>
      <button className="add-to-wishlist-btn">Add to wishlist</button>
      </div>
    </>
  );
};

export default Slide;
