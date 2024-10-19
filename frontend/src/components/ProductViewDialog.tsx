import React from 'react';
import { Dialog, DialogContent, DialogTitle, Typography, Box, CardMedia, Button, Table, TableBody, TableCell, TableRow } from '@mui/material';

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  category: string;
  subCategory: string;
  shipping: string;
  color: string;
  brand: string;
  available: number;
  sold: number;
}

interface ProductViewDialogProps {
  product: Product;
  open: boolean;
  onClose: () => void;
}

const ProductViewDialog: React.FC<ProductViewDialogProps> = ({ product, open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>{product.name}</DialogTitle>
      <DialogContent>
        <Box display="flex" flexDirection="column" alignItems="center">
          <CardMedia
            component="img"
            height="300"
            image={product.image}
            alt={product.name}
            sx={{ mb: 2 }}
          />
          <Typography variant="h6" gutterBottom>
            ${product.price}
          </Typography>

          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Price</TableCell>
                <TableCell>${product.price}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Category</TableCell>
                <TableCell>{product.category}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Sub Categories</TableCell>
                <TableCell>{product.subCategory}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Shipping</TableCell>
                <TableCell>{product.shipping}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Color</TableCell>
                <TableCell>{product.color}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Brand</TableCell>
                <TableCell>{product.brand}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Available</TableCell>
                <TableCell>{product.available}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Sold</TableCell>
                <TableCell>{product.sold}</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <Button onClick={onClose} sx={{ mt: 2 }}>
            Close
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ProductViewDialog;
