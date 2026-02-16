# Visual Product Matcher — AI Powered Visual Search Platform

Live Demo:   https://visual-product-matcher-k7r7.vercel.app
GitHub Repository: https://github.com/Kumari-Aayushi/visual-product-matcher  

---

## Overview

Visual Product Matcher is an AI-powered visual similarity search platform that allows users to upload an image and instantly discover visually similar products using deep learning.

The system leverages TensorFlow.js and the MobileNet pretrained neural network to extract high-dimensional feature embeddings from images and compares them using cosine similarity to find the closest visual matches.

This project demonstrates practical implementation of computer vision, deep learning, and modern frontend engineering in a real-world e-commerce use case.

The entire application runs fully in the browser, making it fast, scalable, and deployment-friendly without requiring backend infrastructure.

---

## Key Features

• AI-powered visual similarity search using MobileNet  
• Upload images directly from device  
• Search using image URLs  
• Category-aware filtering for improved accuracy  
• Real-time similarity scoring with confidence levels  
• Optimized performance using embedding caching  
• Modern, responsive, production-quality UI  
• Skeleton loaders for smooth user experience  
• Dark mode support  
• Fully client-side architecture  
• Fast deployment using Vercel  

---

## How It Works

1. The user uploads an image or provides an image URL
2. The MobileNet neural network extracts feature embeddings
3. Embeddings are compared against stored product embeddings
4. Cosine similarity algorithm calculates similarity score
5. Most similar products are ranked and displayed
6. Results include similarity confidence score and category filtering

This approach replicates how real-world visual search engines such as Amazon, Flipkart, and Google Lens operate.

---

## Technology Stack

Frontend  
• React.js  
• JavaScript (ES6+)  
• HTML5  
• CSS3  

Artificial Intelligence / Machine Learning  
• TensorFlow.js  
• MobileNet pretrained convolutional neural network  
• Cosine similarity algorithm  

Deployment  
• Vercel (Cloud deployment platform)  

Version Control  
• Git  
• GitHub  

---

## Project Architecture

visual-product-matcher/
│
├── public/
│ ├── index.html
│ ├── favicon.ico
│
├── src/
│ ├── components/
│ │ └── ProductCard.js
│ │
│ ├── products.js
│ ├── App.js
│ ├── App.css
│ └── index.js
│
├── package.json
├── package-lock.json
└── README.md


---

## Performance Optimization

To ensure fast performance, product embeddings are cached using browser localStorage.

This prevents recomputation of embeddings and significantly improves search speed and user experience.

---

## Real-World Applications

This technology can be used in:

• E-commerce visual search engines  
• Fashion recommendation systems  
• Product identification tools  
• Retail automation platforms  
• AI-based recommendation engines  

---

## Installation and Setup (Local Development)

Step 1: Clone repository

git clone https://github.com/Kumari-Aayushi/visual-product-matcher.git


Step 2: Navigate into project

cd visual-product-matcher


Step 3: Install dependencies

npm install


Step 4: Run application

npm start


Application will run at:

http://localhost:3000


---

## Deployment

This application is deployed using Vercel for fast, secure, and scalable hosting.

Live URL:  
https://visual-product-matcher-k7r7-8qv588tbi.vercel.app

Deployment platform automatically builds and deploys the application from GitHub.

---

## Learning Outcomes

This project demonstrates practical knowledge of:

• Deep learning integration in frontend applications  
• Computer vision using pretrained neural networks  
• Feature extraction and similarity matching  
• Modern React.js development  
• Real-world AI product implementation  
• Cloud deployment using Vercel  

---

## Author

Aayushi Kumari  
B.Tech Computer Science and Engineering  
Birla Institute of Technology, Mesra  

GitHub:  
https://github.com/Kumari-Aayushi  

---

## Conclusion

Visual Product Matcher demonstrates how artificial intelligence can be integrated into modern web applications to build intelligent, scalable, and real-world usable systems.

This project reflects strong understanding of AI integration, frontend engineering, and deployment workflows.

---

## License

This project is created for educational and demonstration purposes.
