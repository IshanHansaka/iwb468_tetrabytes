import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import ProductViewDialog from '../components/ProductViewDialog';
import axios from 'axios';

interface ShopProduct {
  laptop_id: number;
  brand: string;
  model: string;
  processor: string;
  ram: string;
  storage: string;
  short_ram: string;
  short_processor: string;
  display: string;
  gpu: string;
  weight: string;
  battery: string;
  image_link: string;
  shops: {
    shop_id: number;
    shop_name: string;
    price: number;
    warranty: string;
    in_stock: boolean;
    last_updated: string;
  }[];
}

const Shop: React.FC = () => {
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:9090/all');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const [products, setProducts] = useState<ShopProduct[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedRAM, setSelectedRAM] = useState<string[]>([]);
  const [selectedProcessors, setSelectedProcessors] = useState<string[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<ShopProduct | null>(
    null
  );

  const filteredProducts = products.filter((product) => {
    const shop = product.shops[0];
    const inPriceRange =
      shop.price >= priceRange[0] && shop.price <= priceRange[1];
    const matchesRating = selectedRating === null;
    const inSelectedBrand =
      selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const inSelectedRAM =
      selectedRAM.length === 0 || selectedRAM.includes(product.short_ram);
    const inSelectedProcessors =
      selectedProcessors.length === 0 ||
      selectedProcessors.includes(product.short_processor);

    return (
      inPriceRange &&
      matchesRating &&
      inSelectedBrand &&
      inSelectedRAM &&
      inSelectedProcessors
    );
  });

  const handleViewProduct = (product: ShopProduct) => {
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
              key={product.laptop_id}
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