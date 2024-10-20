import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import ProductViewDialog from '../components/ProductViewDialog';

const Shop: React.FC = () => {
  const products = [
    { id: 1, name: 'Samsung S23 Ultra', price: 1200, rating: 5, image: 'macbook-pro.jpg', category: 'Mobile', brand: 'ASUS',model: 'Vivobook Pro 15 Q543M Ultra9',cpu: 'NVIDIA® GeForce RTX 3050 6GB GDDR6',processor: 'Intel® Core™ i9',display: '15.6-inch, FHD (1920 x 1080) OLED',storage: '2TB M.2 NVME SSD',weight:'1.9kg',battery: '75WHrs' , ram: '8GB', processordescription: '14900HX, 24 Cores 5.8GHz 36MB', shipping: 'No', available: 9, sold: 1 },
    { id: 2, name: 'Macbook Air', price: 2000, rating: 5, image: 'Macbook Air.jpg', category: 'Laptop', brand: 'Apple', color: 'Silver', ram: '16GB', processor: 'Apple M1', shipping: 'No', available: 9, sold: 1 },
    { id: 3, name: 'Pavilion', price: 1200, rating: 3, image: 'Pavillion.jpg', category: 'Laptop', brand: 'HP', color: 'Brown', ram: '8GB', processor: 'Intel', shipping: 'No', available: 9, sold: 1 },
    { id: 4, name: 'Macbook Pro', price: 4000, rating: 5, image: 'macbook-pro.jpg', category: 'Laptop', brand: 'Apple', color: 'Silver', ram: '32GB', processor: 'Apple M2', shipping: 'No', available: 9, sold: 1 },
    { id: 5, name: 'HP Laptop', price: 1200, rating: 0, image: 'HP .jpg', category: 'Laptop', brand: 'HP', color: 'Black', ram: '4GB', processor: 'Intel', shipping: 'No', available: 9, sold: 1 },
    { id: 6, name: 'Samsung S23 Ultra', price: 1200, rating: 5, image: 'macbook-pro.jpg', category: 'Mobile', brand: 'Samsung', color: 'Black', ram: '8GB', processor: 'Snapdragon', shipping: 'No', available: 9, sold: 1 },
    { id: 7, name: 'Macbook Air', price: 2000, rating: 5, image: 'Macbook Air.jpg', category: 'Laptop', brand: 'Apple', color: 'Silver', ram: '16GB', processor: 'Apple M1', shipping: 'No', available: 9, sold: 1 },
    { id: 8, name: 'Pavilion', price: 1200, rating: 3, image: 'Pavillion.jpg', category: 'Laptop', brand: 'HP', color: 'Brown', ram: '8GB', processor: 'Intel', shipping: 'No', available: 9, sold: 1 },
    { id: 9, name: 'Macbook Pro', price: 4000, rating: 5, image: 'macbook-pro.jpg', category: 'Laptop', brand: 'Apple', color: 'Silver', ram: '32GB', processor: 'Apple M2', shipping: 'No', available: 9, sold: 1 },
    { id: 10, name: 'HP Laptop', price: 1200, rating: 0, image: 'HP .jpg', category: 'Laptop', brand: 'HP', color: 'Black', ram: '4GB', processor: 'Intel', shipping: 'No', available: 9, sold: 1 },
    { id: 11, name: 'ThinkPad', price: 800, rating: 4, image: 'HP Spectre.jpg', category: 'Laptop', brand: 'Lenovo', color: 'Blue', ram: '16GB', processor: 'AMD', shipping: 'No', available: 9, sold: 1 },
    { id: 12, name: 'ThinkPad', price: 800, rating: 4, image: 'HP Spectre.jpg', category: 'Laptop', brand: 'Lenovo', color: 'Blue', ram: '16GB', processor: 'AMD', shipping: 'No', available: 9, sold: 1 },
  ];

  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedRAM, setSelectedRAM] = useState<string[]>([]);
  const [selectedProcessors, setSelectedProcessors] = useState<string[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = products.filter((product) => {
    const inPriceRange = product.price >= priceRange[0] && product.price <= priceRange[1];
    const inSelectedCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const matchesRating = selectedRating === null || product.rating === selectedRating;
    const inSelectedBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const inSelectedRAM = selectedRAM.length === 0 || selectedRAM.includes(product.ram);
    const inSelectedProcessors = selectedProcessors.length === 0 || selectedProcessors.includes(product.processor);
    return inPriceRange && inSelectedCategory && matchesRating && inSelectedBrand && inSelectedRAM && inSelectedProcessors;
  });

  const handleViewProduct = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseView = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="shop-page">
      <div className="text">Products</div>
      <Header />
      <div className="content">
        <Sidebar 
          priceRange={priceRange} 
          setPriceRange={setPriceRange} 
          selectedCategories={selectedCategories} 
          setSelectedCategories={setSelectedCategories} 
          selectedRating={selectedRating}
          setSelectedRating={setSelectedRating}
          selectedBrands={selectedBrands}
          setSelectedBrands={setSelectedBrands}
          selectedRAM={selectedRAM}
          setSelectedRAM={setSelectedRAM}
          selectedProcessors={selectedProcessors}
          setSelectedProcessors={setSelectedProcessors}
        />
        <div className="products-container">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onView={handleViewProduct}
            />
          ))}
        </div>
      </div>
      {selectedProduct && (
        <ProductViewDialog 
          product={selectedProduct} 
          open={Boolean(selectedProduct)} 
          onClose={handleCloseView} 
        />
      )}
    </div>
  );
};

export default Shop;
