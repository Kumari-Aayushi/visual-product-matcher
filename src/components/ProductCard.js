// components/ProductCard.js

import React, { useState, useEffect } from "react";
import "./ProductCard.css";

export default function ProductCard({ product }) {

  const [liked, setLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  /* Load favorite from localStorage */
  useEffect(() => {

    const savedFavorites =
      JSON.parse(localStorage.getItem("favorites")) || [];

    if (savedFavorites.includes(product.id)) {
      setLiked(true);
    }

  }, [product.id]);


  /* Handle favorite click */
  function handleLike(e) {

    e.stopPropagation();

    const savedFavorites =
      JSON.parse(localStorage.getItem("favorites")) || [];

    let updated;

    if (liked) {
      updated = savedFavorites.filter(id => id !== product.id);
    } else {
      updated = [...savedFavorites, product.id];
    }

    localStorage.setItem(
      "favorites",
      JSON.stringify(updated)
    );

    setLiked(!liked);
  }


  /* Confidence class */
  const confidenceClass =
    product.similarity < 65
      ? "low-confidence"
      : product.similarity < 85
      ? "mid-confidence"
      : "high-confidence";


  /* Confidence label */
  function getConfidenceLabel(score) {

    if (score >= 90) return "Excellent match";
    if (score >= 80) return "Very strong match";
    if (score >= 70) return "Strong match";
    if (score >= 60) return "Moderate match";
    return "Weak match";

  }


  function handleCardClick() {

    console.log("Clicked:", product.name);

  }


  return (

    <div
      className={`product-card ${confidenceClass} ${
        product.isTop ? "top-match" : ""
      }`}
      onClick={handleCardClick}
    >

      {/* Badge */}
      {product.isTop && (
        <div className="badge">
          ⭐ Best Match
        </div>
      )}


      {/* Favorite button */}
      <button
        className={`favorite-btn ${liked ? "liked" : ""}`}
        onClick={handleLike}
      >
        {liked ? "❤️" : "🤍"}
      </button>


      {/* Image container */}
      <div className="image-container">

        {!imageLoaded &&
          <div className="image-skeleton"></div>
        }

        <img
          className="product-image"
          src={product.image}
          alt={product.name}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
        />

        <div className="image-overlay">
          <span className="ai-label">
            AI Match
          </span>
        </div>

      </div>


      {/* Card body */}
      <div className="card-body">

        <h3 className="product-name">
          {product.name}
        </h3>

        <p className="category-text">
          {product.category}
        </p>


        <div className="confidence-section">

          <div className="confidence-header">

            <span className="confidence-label">
              AI Confidence
            </span>

            <span className="confidence-value">
              {product.similarity}%
            </span>

          </div>


          <div className="confidence-bar">

            <div
              className="confidence-fill"
              style={{
                width: `${product.similarity}%`
              }}
            />

          </div>


          <p className="confidence-description">
            {getConfidenceLabel(product.similarity)}
          </p>

        </div>


        <p className="match-reason">
          Matched using deep learning visual similarity.
        </p>

      </div>

    </div>

  );

}
