import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Stack, Box } from '@mui/material';
import { Visibility } from '@mui/icons-material';
import RatingStars from './RatingStars';

interface ShopProduct {
  laptop_id: number;
  brand: string;
  model: string;
  processor: string;
  ram: string;
  storage: string;
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

interface ProductCardProps {
  product: ShopProduct;
  onView: (product: ShopProduct) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onView }) => {
  // Assume we're using the first shop's details for display
  const shop = product.shops[0];

  return (
    <Card className="product-card shadow-lg">
      <CardMedia
        component="img"
        height="180"
        image={product.image_link}
        alt={product.model}
      />
      <CardContent>
        <Box mb={3}>
          <Typography variant="h6">{product.model}</Typography>
          <Typography variant="body2" color="textSecondary">
            ${shop.price.toLocaleString()} {/* Format the price */}
          </Typography>
        </Box>
        <Box mb={2}>
          <Typography variant="body2" color="textSecondary">
            {`Brand: ${product.brand}`} {/* Display the brand */}
          </Typography>
        </Box>
        <Box mb={3}>
          <RatingStars rating={shop.price > 400000 ? 4 : 5} /> {/* Placeholder for rating logic */}
        </Box>
        <Stack direction="row" spacing={2} className="mt-4">
          <Button
            variant="outlined"
            sx={{
              borderColor: 'black',
              color: 'black',
              '&:hover': { backgroundColor: 'black', color: 'white' },
              display: 'flex',
              alignItems: 'center',
              width: '220px',
              height: '50px',
            }}
            onClick={() => onView(product)}
          >
            <Visibility sx={{ marginRight: 1 }} />
            View Product
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
