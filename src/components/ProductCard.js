// components/ProductCard.js
import React from "react";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  return (
    <div
      className={`product-card ${
        product.similarity < 65
          ? "low-confidence"
          : product.similarity < 85
          ? "mid-confidence"
          : ""
      } ${product.isTop ? "top-match" : ""}`}
    >
      {product.isTop && <div className="badge">TOP MATCH</div>}

      <img src={product.image} alt={product.name} />

      <div className="card-body">
        <h3>{product.name}</h3>
        <p className="category-text">{product.category}</p>

        <p className="similarity-text">
          AI Confidence: {product.similarity}%
        </p>

        <div className="confidence-bar">
          <div
            className="confidence-fill"
            style={{ width: `${product.similarity}%` }}
          />
        </div>

        <p className="match-reason">
          Matched using category-constrained visual similarity
        </p>
      </div>
    </div>
  );
}
