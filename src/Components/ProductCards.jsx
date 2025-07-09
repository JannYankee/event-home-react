import React, { useState, useEffect } from "react";
import Rating from "./Rating.jsx";
import "../allDesign.css";

const getRandomDiscount = () => {
  const discounts = [0, 5, 7, 10, 15, 20, 25];
  return discounts[Math.floor(Math.random() * discounts.length)];
};

const ProductCard = ({ product }) => {
  const [inCart, setInCart] = useState(false);
  const [inFav, setInFav] = useState(false);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    setDiscount(getRandomDiscount());
  }, []);

  const toggleCart = () => setInCart(!inCart);
  const toggleFav = () => setInFav(!inFav);

  const discountedPrice = Math.round(product.price * (1 - discount / 100));

  return (
    <div className="product-card">
      {discount > 0 && <div className="discount-badge">-{discount}%</div>}
      <img src={product.images[0]} alt={product.title} className="product-image" />
      <h4 className="product-title">{product.title.slice(0, 40)}...</h4>
      <div className="rating-row">
        <Rating value={Math.floor(Math.random() * 5) + 1} />
        <span className="review-count">{Math.floor(Math.random() * 20) + 1}</span>
      </div>
      <p className="in-stock">✓ є в наявності</p>
      <div className="price-row">
        {discount > 0 && <span className="old-price">{product.price} ₴</span>}
        <span className="new-price">{discountedPrice} ₴</span>
      </div>
      <div className="action-row">
        <button onClick={toggleCart} className={`cart-btn ${inCart ? "in-cart" : ""}`}>
          🛒
        </button>
        <button onClick={toggleFav} className="fav-btn">
          {inFav ? "❤️" : "🤍"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
