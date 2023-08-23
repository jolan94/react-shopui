import React from 'react';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import ProductCard from './components/ProductCard';

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <div className="product-container">
        <ProductCard />
        <ProductCard />
        {/* Repeat ProductCard component for each product */}
      </div>
    </div>
  );
}

export default App;
