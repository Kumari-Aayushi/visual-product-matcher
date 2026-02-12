// App.js
import React, { useEffect, useState } from "react";
import * as mobilenet from "@tensorflow-models/mobilenet";
import "@tensorflow/tfjs";
import products from "./products";
import ProductCard from "./components/ProductCard";
import "./App.css";

/* =======================
   UTILS
======================= */
function cosineSimilarity(a, b) {
  let dot = 0, na = 0, nb = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    na += a[i] * a[i];
    nb += b[i] * b[i];
  }
  return dot / (Math.sqrt(na) * Math.sqrt(nb) + 1e-10);
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

async function getEmbedding(model, img) {
  const act = model.infer(img, true);
  const data = await act.data();
  act.dispose();
  return Array.from(data);
}

/* =======================
   APP
======================= */
export default function App() {
  const [model, setModel] = useState(null);
  const [loadingModel, setLoadingModel] = useState(true);

  const [imagePreview, setImagePreview] = useState("");
  const [imageURL, setImageURL] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("");
  const [results, setResults] = useState([]);
  const [loadingSearch, setLoadingSearch] = useState(false);

  const [productEmbeddings, setProductEmbeddings] = useState(null);

  /* =======================
     LOAD AI MODEL
  ======================= */
  useEffect(() => {
    let mounted = true;

    async function loadModel() {
      try {
        const m = await mobilenet.load({ version: 2, alpha: 1.0 });
        if (mounted) setModel(m);
      } catch (e) {
        console.error(e);
      } finally {
        if (mounted) setLoadingModel(false);
      }
    }

    loadModel();
    return () => (mounted = false);
  }, []);

  /* =======================
     LOAD CACHED EMBEDDINGS
  ======================= */
  useEffect(() => {
    const cached = localStorage.getItem("product_embeddings_v1");
    if (cached) {
      try {
        setProductEmbeddings(JSON.parse(cached));
      } catch {}
    }
  }, []);

  async function ensureEmbeddings() {
    if (productEmbeddings) return productEmbeddings;
    if (!model) throw new Error("Model not ready");

    const emb = {};
    for (const p of products) {
      try {
        const img = await loadImage(p.image);
        emb[p.id] = await getEmbedding(model, img);
      } catch {
        console.warn("Embedding failed:", p.image);
      }
    }

    localStorage.setItem("product_embeddings_v1", JSON.stringify(emb));
    setProductEmbeddings(emb);
    return emb;
  }

  /* =======================
     SEARCH (CATEGORY FIRST)
  ======================= */
  async function handleSearch() {
    if (!model) {
      alert("AI model is still loading, please wait.");
      return;
    }

    if (!selectedCategory) {
      alert("Please choose a product category.");
      return;
    }

    const src = imageURL || imagePreview;
    if (!src) {
      alert("Upload or paste an image first.");
      return;
    }

    setLoadingSearch(true);
    setResults([]);

    try {
      const queryImg = await loadImage(src);
      const queryEmb = await getEmbedding(model, queryImg);
      const emb = await ensureEmbeddings();

      const sims = [];

      for (let p of products) {
        if (selectedCategory !== "Other" && p.category !== selectedCategory) {
          continue;
        }

        const pe = emb[p.id];
        if (!pe) continue;

        const sim = cosineSimilarity(queryEmb, pe);
        sims.push({ ...p, similarity: Math.round(sim * 100) });
      }

      sims.sort((a, b) => b.similarity - a.similarity);

      const top = sims.slice(0, 12).map((p, i) => ({
        ...p,
        isTop: i === 0,
      }));

      setResults(top);
    } catch (e) {
      console.error(e);
      alert("Search failed (image or CORS issue).");
    } finally {
      setLoadingSearch(false);
    }
  }

  /* =======================
     UI
  ======================= */
  return (
    <div className="app">
      {/* HEADER */}
      <header className="app-header">
        <h1>Visual Product Matcher</h1>
        <button
          className="mode-toggle"
          onClick={() => document.body.classList.toggle("dark")}
          title="Toggle theme"
        >
          🌙
        </button>
      </header>

      <p className="subtitle">
        Category-aware AI visual similarity search using MobileNet
      </p>

      <div className="container">
        {/* LEFT PANEL */}
        <div className="left">
          <h2>Upload Image</h2>

          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              if (e.target.files?.[0]) {
                setImagePreview(URL.createObjectURL(e.target.files[0]));
                setImageURL("");
              }
            }}
          />

          <input
            type="text"
            placeholder="Or paste image URL (CORS enabled)"
            value={imageURL}
            onChange={(e) => {
              setImageURL(e.target.value);
              setImagePreview(e.target.value);
            }}
          />

          {imagePreview && (
            <img
              src={imagePreview}
              className="preview"
              alt="Uploaded preview"
            />
          )}

          {/* CATEGORY AFTER IMAGE (IMPORTANT UX) */}
          <h3 className="section-label">Choose Product Category</h3>

          <div className="category-selector">
            {["Clothing", "Footwear", "Accessories", "Electronics", "Other"].map(
              (cat) => (
                <button
                  key={cat}
                  className={`category-chip ${
                    selectedCategory === cat ? "active" : ""
                  }`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              )
            )}
          </div>

          <button
            onClick={handleSearch}
            disabled={!imagePreview || !selectedCategory || loadingSearch}
            className="ai-search-btn"
          >
            {loadingSearch ? "Analyzing with AI…" : "Find Similar Products"}
          </button>

          {loadingModel && (
            <p className="loading">Loading AI model…</p>
          )}
        </div>

        {/* RIGHT PANEL */}
        <div className="right">
          <h2>Similar Products</h2>

          {loadingSearch ? (
            <div className="skeleton-grid">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="skeleton-card" />
              ))}
            </div>
          ) : results.length ? (
            <div className="product-grid">
              {results.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              Upload an image, choose a category, and click Search.
            </div>
          )}
        </div>
      </div>

      <footer className="footer">
        Built with React & TensorFlow.js · Visual Product Search Demo
      </footer>
    </div>
  );
}
