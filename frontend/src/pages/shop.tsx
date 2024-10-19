import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import ProductViewDialog from '../components/ProductViewDialog';

const Shop: React.FC = () => {
  const products = [
    { id: 1, name: 'Samsung S23 Ultra', price: 1200, rating: 5, image: 'macbook-pro.jpg', category: 'Mobile', brand: 'Samsung', color: 'Black',subCategory: 'Macbook Air',shipping: 'No', available: 9,sold: 1 },
    { id: 2, name: 'Macbook Air', price: 2000, rating: 5, image: 'Macbook Air.jpg', category: 'Laptop', brand: 'Apple', color: 'Silver',subCategory: 'Macbook Air',shipping: 'No', available: 9,sold: 1  },
    { id: 3, name: 'Pavilion', price: 1200, rating: 3, image: 'Pavillion.jpg', category: 'Laptop', brand: 'HP', color: 'Brown',subCategory: 'Macbook Air',shipping: 'No', available: 9,sold: 1  },
    { id: 4, name: 'Macbook Pro', price: 4000, rating: 5, image: 'macbook-pro.jpg', category: 'Laptop', brand: 'Apple', color: 'Silver',subCategory: 'Macbook Air',shipping: 'No', available: 9,sold: 1  },
    { id: 5, name: 'HP Laptop', price: 1200, rating: 0, image: 'HP .jpg', category: 'Laptop', brand: 'HP', color: 'Black',subCategory: 'Macbook Air',shipping: 'No', available: 9,sold: 1  },
    { id: 6, name: 'ThinkPad', price: 800, rating: 4, image: 'HP Spectre.jpg', category: 'Laptop', brand: 'Lenovo', color: 'Blue',subCategory: 'Macbook Air',shipping: 'No', available: 9,sold: 1  },
  ];

  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = products.filter((product) => {
    const inPriceRange = product.price >= priceRange[0] && product.price <= priceRange[1];
    const inSelectedCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const matchesRating = selectedRating === null || product.rating === selectedRating;
    const inSelectedBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const inSelectedColor = selectedColors.length === 0 || selectedColors.includes(product.color);
    return inPriceRange && inSelectedCategory && matchesRating && inSelectedBrand && inSelectedColor;
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
          selectedColors={selectedColors}
          setSelectedColors={setSelectedColors}
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
