import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Stack,
  Box,
} from '@mui/material';
import { Visibility } from '@mui/icons-material';
import RatingStars from './RatingStars';

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

interface ProductCardProps {
  product: ShopProduct;
  onView: (product: ShopProduct) => void;
}

const getRatingByPrice = (price: number): number => {
  if (price > 1000000) {
    return 4.8;
  } else if (price > 500000) {
    return 4.7;
  } else if (price > 400000) {
    return 4.6;
  } else if (price > 300000) {
    return 4.5;
  } else if (price > 200000) {
    return 4.4;
  } else if (price > 100000) {
    return 4.2;
  } else {
    return 3.5;
  }
};

const ProductCard: React.FC<ProductCardProps> = ({ product, onView }) => {
  const shop = product.shops[0];
  const rating = getRatingByPrice(shop.price);

  return (
    <Card className="product-card shadow-lg">
      <CardMedia
        component="img"
        height="180"
        image={product.image_link}
        alt={product.model}
      />
      <CardContent>
        <Box mb={1}>
          <Typography variant="h6">
            {product.brand} {product.model}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {shop.price.toLocaleString()} LKR
          </Typography>
        </Box>

        <Box mb={2}>
          <RatingStars rating={rating} /> {/* Use the stable rating */}
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