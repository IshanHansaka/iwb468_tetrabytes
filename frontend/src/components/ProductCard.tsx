import React from 'react';
import RatingStars from './RatingStars';

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name} - ${product.price}</h3>
      <p>This is the most powerful product...</p>
      <RatingStars rating={product.rating} />
      <div className="actions">
        <button>View Product</button>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
