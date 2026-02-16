// App.js

import React, {
  useEffect,
  useState,
  useRef,
  useMemo
} from "react";

import "@tensorflow/tfjs";
import * as mobilenet from "@tensorflow-models/mobilenet";
import { pipeline } from "@xenova/transformers";

import products from "./products";
import ProductCard from "./components/ProductCard";

import "./App.css";


/* ============================================
   COSINE SIMILARITY
============================================ */

function cosineSimilarity(a, b) {

  let dot = 0;
  let normA = 0;
  let normB = 0;

  for (let i = 0; i < a.length; i++) {

    dot += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];

  }

  return dot / (Math.sqrt(normA) * Math.sqrt(normB) + 1e-10);

}


/* ============================================
   LOAD IMAGE SAFELY
============================================ */

function loadImage(src) {

  return new Promise((resolve, reject) => {

    const img = new Image();

    img.crossOrigin = "anonymous";

    img.onload = () => resolve(img);

    img.onerror = reject;

    img.src = src;

  });

}


/* ============================================
   HYBRID EMBEDDING (CLIP + MobileNet)
============================================ */

async function getEmbedding(model, image, clipExtractor) {

  try {

    if (clipExtractor) {

      const result =
        await clipExtractor(image, {
          pooling: "mean",
          normalize: true
        });

      return Array.from(result.data);

    }

  }
  catch {
    console.warn("CLIP failed, fallback MobileNet");
  }

  const tensor =
    model.infer(image, true);

  const data =
    await tensor.data();

  tensor.dispose();

  return Array.from(data);

}


/* ============================================
   MAIN APP
============================================ */

export default function App() {


  /* ================= STATE ================= */

  const [model, setModel] =
    useState(null);

  const [clipExtractor,
    setClipExtractor] =
    useState(null);

  const [loadingModel,
    setLoadingModel] =
    useState(true);

  const [loadingSearch,
    setLoadingSearch] =
    useState(false);

  const [imagePreview,
    setImagePreview] =
    useState("");

  const [imageURL,
    setImageURL] =
    useState("");

  const [selectedCategory,
    setSelectedCategory] =
    useState("");

  const [results,
    setResults] =
    useState([]);

  const [productEmbeddings,
    setProductEmbeddings] =
    useState({});

  const [searchHistory,
    setSearchHistory] =
    useState([]);

  const [favorites,
    setFavorites] =
    useState([]);

  const embeddingsReady =
    useRef(false);



  /* ============================================
     LOAD FAVORITES
  ============================================ */

  useEffect(() => {

    const fav =
      JSON.parse(
        localStorage.getItem("favorites")
      ) || [];

    setFavorites(fav);

  }, []);



  /* ============================================
     LOAD THEME
  ============================================ */

  useEffect(() => {

    const savedTheme =
      localStorage.getItem("theme");

    if (savedTheme === "dark")
      document.body.classList.add("dark");

  }, []);



  function toggleTheme() {

    document.body.classList.toggle("dark");

    const isDark =
      document.body.classList.contains("dark");

    localStorage.setItem(
      "theme",
      isDark ? "dark" : "light"
    );

  }



  /* ============================================
     LOAD MOBILENET
  ============================================ */

  useEffect(() => {

    async function loadMobileNet() {

      try {

        const m =
          await mobilenet.load({
            version: 2,
            alpha: 1.0
          });

        setModel(m);

      }
      catch (e) {
        console.error(e);
      }

    }

    loadMobileNet();

  }, []);



  /* ============================================
     LOAD CLIP MODEL
  ============================================ */

  useEffect(() => {

    async function loadCLIP() {

      try {

        const extractor =
          await pipeline(
            "feature-extraction",
            "Xenova/clip-vit-base-patch32"
          );

        setClipExtractor(extractor);

      }
      catch (e) {
        console.error(e);
      }
      finally {
        setLoadingModel(false);
      }

    }

    loadCLIP();

  }, []);



  /* ============================================
     LOAD CACHE
  ============================================ */

  useEffect(() => {

    const cache =
      localStorage.getItem(
        "embeddings_cache"
      );

    if (cache) {

      setProductEmbeddings(
        JSON.parse(cache)
      );

      embeddingsReady.current = true;

    }

  }, []);



  /* ============================================
     CREATE EMBEDDINGS
  ============================================ */

  async function ensureEmbeddings() {

    if (embeddingsReady.current)
      return productEmbeddings;

    const newEmbeddings = {};

    for (let product of products) {

      try {

        const img =
          await loadImage(product.image);

        const emb =
          await getEmbedding(
            model,
            img,
            clipExtractor
          );

        newEmbeddings[product.id] = emb;

      }
      catch {
        console.warn(product.name);
      }

    }

    setProductEmbeddings(newEmbeddings);

    localStorage.setItem(
      "embeddings_cache",
      JSON.stringify(newEmbeddings)
    );

    embeddingsReady.current = true;

    return newEmbeddings;

  }



  /* ============================================
     PERSONALIZATION BOOST
  ============================================ */

  function personalizedScore(
    product,
    similarity
  ) {

    let boost = similarity;

    if (favorites.includes(product.id))
      boost += 0.05;

    return boost;

  }



  /* ============================================
     FAST INDEXING
  ============================================ */

  const indexedProducts =
    useMemo(() => {

      return products.reduce(
        (acc, product) => {

          if (!acc[product.category])
            acc[product.category] = [];

          acc[product.category]
            .push(product);

          return acc;

        }, {}
      );

    }, []);



  /* ============================================
     UNIQUE CATEGORY LIST (FIX DUPLICATE OTHER)
  ============================================ */

  const categoryList =
    useMemo(() => {

      return [
        ...new Set(
          Object.keys(indexedProducts)
        )
      ];

    }, [indexedProducts]);



  /* ============================================
     SEARCH FUNCTION
  ============================================ */

  async function handleSearch() {

    if (!model) {
      alert("Model loading...");
      return;
    }

    if (!selectedCategory) {
      alert("Select category");
      return;
    }

    const src =
      imageURL || imagePreview;

    if (!src) {
      alert("Upload image first");
      return;
    }

    setLoadingSearch(true);

    try {

      const img =
        await loadImage(src);

      const queryEmbedding =
        await getEmbedding(
          model,
          img,
          clipExtractor
        );

      const embeddings =
        await ensureEmbeddings();

      const categoryProducts =
        indexedProducts[selectedCategory] || [];

      const matches = [];

      for (let product of categoryProducts) {

        const emb =
          embeddings[product.id];

        if (!emb) continue;

        let similarity =
          cosineSimilarity(
            queryEmbedding,
            emb
          );

        similarity =
          personalizedScore(
            product,
            similarity
          );

        matches.push({

          ...product,

          similarity:
            Math.round(similarity * 100)

        });

      }

      matches.sort(
        (a, b) =>
          b.similarity - a.similarity
      );

      const top =
        matches.slice(0, 12)
          .map((p, i) => ({
            ...p,
            isTop: i === 0
          }));

      setResults(top);



      /* SAVE HISTORY */

      const history = [

        {
          image: src,
          category: selectedCategory,
          time:
            new Date()
            .toLocaleTimeString()
        },

        ...searchHistory

      ].slice(0, 5);

      setSearchHistory(history);

      localStorage.setItem(
        "search_history",
        JSON.stringify(history)
      );

    }
    catch (e) {

      console.error(e);

      alert("Search failed");

    }
    finally {

      setLoadingSearch(false);

    }

  }



  /* ============================================
     UI
  ============================================ */

  return (





    <div className="app">


      <header className="app-header">

        <h1>
          Visual Product Matcher
        </h1>

        <button
          className="mode-toggle"
          onClick={toggleTheme}
        >
          🌙
        </button>

      </header>



      <p className="subtitle">

        AI-powered visual search with CLIP + MobileNet

      </p>



      <div className="container">


        {/* LEFT */}

        <div className="left">

          <h2>Upload Image</h2>


          <input
            type="file"
            accept="image/*"
            onChange={(e) => {

              if (e.target.files?.[0]) {

                setImagePreview(
                  URL.createObjectURL(
                    e.target.files[0]
                  )
                );

                setImageURL("");

              }

            }}
          />


          <input
            type="text"
            placeholder="Paste image URL"
            value={imageURL}
            onChange={(e) => {

              setImageURL(e.target.value);

              setImagePreview(e.target.value);

            }}
          />


          {imagePreview &&
            <img
              src={imagePreview}
              className="preview"
              alt="preview"
            />
          }



          <h3 className="section-label">
            Category
          </h3>


          <div className="category-selector">

            {categoryList.map(cat => (

              <button
                key={cat}
                onClick={() =>
                  setSelectedCategory(cat)
                }
                className={`category-chip ${
                  selectedCategory === cat
                    ? "active"
                    : ""
                }`}
              >
                {cat}
              </button>

            ))}

          </div>



          <button
            onClick={handleSearch}
            className="ai-search-btn"
            disabled={
              loadingSearch ||
              !imagePreview ||
              !selectedCategory
            }
          >

            {loadingSearch
              ? "Analyzing..."
              : "Find Similar Products"}

          </button>


          {loadingModel &&
            <p className="loading">
              Loading AI Models...
            </p>
          }

        </div>



        {/* RIGHT */}

        <div className="right">

          <h2>Results</h2>


          {loadingSearch ?

            <div className="skeleton-grid">

              {[...Array(8)]
                .map((_, i) => (

                  <div
                    key={i}
                    className="skeleton-card"
                  />

              ))}

            </div>

            :

            results.length > 0 ?

              <div className="product-grid">

                {results.map(product => (

                  <ProductCard
                    key={product.id}
                    product={product}
                  />

                ))}

              </div>

              :

              <div className="empty-state">

                Upload image and search

              </div>

          }

        </div>

      </div>



      <footer className="footer">

        Powered by CLIP • MobileNet • Personalization

      </footer>


    </div>


  );

}
