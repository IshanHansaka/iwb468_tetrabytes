import React from 'react';
import Sidebar from '../components/Sidebar';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';

const Shop: React.FC = () => {
  // Example products array
  const products = [
    { id: 1, name: 'Samsung S23 Ultra', price: 1200, rating: 5, image: 'macbook-pro.jpg' },
    { id: 2, name: 'Samsung S23 Ultra', price: 2000, rating: 5, image: 'macbook-pro.jpg' },
    { id: 3, name: 'Samsung S23 Ultra', price: 1200, rating: 0, image: 'macbook-pro.jpg' },
    { id: 1, name: 'Samsung S23 Ultra', price: 1200, rating: 5, image: 'macbook-pro.jpg' },
    { id: 2, name: 'Samsung S23 Ultra', price: 2000, rating: 5, image: 'macbook-pro.jpg' },
    { id: 3, name: 'Macbook Air', price: 1200, rating: 0, image: 'macbook-pro.jpg' },
    { id: 2, name: 'Macbook Pro', price: 2000, rating: 5, image: 'macbook-pro.jpg' },
    { id: 3, name: 'Macbook Air', price: 1200, rating: 0, image: 'macbook-pro.jpg' },
    // Add more products here...
  ];

  return (
    <div className="shop-page">
      <Header />
      <div className="content">
        <Sidebar />
        <div className="products-container">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
