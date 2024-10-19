import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Stack, Box, IconButton } from '@mui/material';
import { Visibility } from '@mui/icons-material';
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
  onView: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onView }) => {
  return (
    <Card className="product-card shadow-lg">
      <CardMedia
        component="img"
        height="180"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Box mb={3}>
          <Typography variant="h6">{product.name}</Typography>
          <Typography variant="body2" color="textSecondary">
            ${product.price}
          </Typography>
        </Box>
        <Box mb={2}>
          <Typography variant="body2" color="textSecondary">
            This is the most powerful product...
          </Typography>
        </Box>
        <Box mb={3}>
          <RatingStars rating={product.rating} />
        </Box>
        <Stack direction="row" spacing={2} className="mt-4">
          <IconButton
            sx={{
              backgroundColor: 'grey',
              '&:hover': { backgroundColor: '#333' },
              width: '40px',
              height: '40px',
            }}
            onClick={() => onView(product)}
          >
            <Visibility sx={{ color: 'white' }} />
          </IconButton>
          <Button
            variant="outlined"
            sx={{
              borderColor: 'black',
              color: 'black',
              '&:hover': { backgroundColor: 'black', color: 'white' },
              width: '140px',
              height: '50px',
            }}
          >
            Add to Cart
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
