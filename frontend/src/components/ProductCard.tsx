import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Stack,Box } from '@mui/material';
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
    <Card className="product-card shadow-lg">
      <CardMedia
        component="img"
        height="180"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {product.name} - ${product.price}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          This is the most powerful product...
        </Typography>

        <Box mb={3}>
          <RatingStars rating={product.rating} />
        </Box>

        <Stack direction="row" spacing={0} className="mt-4">
          <Button variant="contained" sx={{ backgroundColor: 'black', color: 'white', '&:hover': { backgroundColor: '#333' },width: '140px', // Adjust the width
              height: '50px',  }}>
            View Product
          </Button>
          <Button variant="outlined" sx={{ borderColor: 'black', color: 'black', '&:hover': { backgroundColor: 'black', color: 'white' },width: '140px', // Adjust the width
              height: '50px',  }}
          >
            Add to Cart
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
