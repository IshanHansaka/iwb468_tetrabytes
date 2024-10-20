import React from 'react';
import { Dialog, DialogContent, DialogTitle, Typography, Box, CardMedia, Button, Table, TableBody, TableCell, TableRow, Grid } from '@mui/material';

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  brand: string;
  model: string;
  processor: string;
  ram: string;
  storage: string;
  display: string;
  cpu: string;
  weight: string;
  battery: string;
  processordescription:string;
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
        <Grid container spacing={2}>
          {/* Image Section */}
          <Grid item xs={12} md={5}>
            <CardMedia
              component="img"
              height="300"
              image={product.image}
              alt={product.name}
              sx={{ borderRadius: 2 }}
            />
          </Grid>

          {/* Details Section */}
          <Grid item xs={14} md={7}>
            

            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Price</TableCell>
                  <TableCell>${product.price}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Brand</TableCell>
                  <TableCell>{product.brand}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Model</TableCell>
                  <TableCell>{product.model}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Processor</TableCell>
                  <TableCell>{product.processor}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>RAM</TableCell>
                  <TableCell>{product.ram}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Storage</TableCell>
                  <TableCell>{product.storage}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Display</TableCell>
                  <TableCell>{product.display}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>CPU</TableCell>
                  <TableCell>{product.cpu}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Weight</TableCell>
                  <TableCell>{product.weight}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Battery</TableCell>
                  <TableCell>{product.battery}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Processor-d</TableCell>
                  <TableCell>{product.processordescription}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Grid>
        </Grid>

        <Box display="flex" justifyContent="center" mt={2}>
          <Button onClick={onClose}>
            Close
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ProductViewDialog;
