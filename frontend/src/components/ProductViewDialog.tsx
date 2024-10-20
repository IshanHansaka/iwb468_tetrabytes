import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  CardMedia,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Grid,
  Typography,
} from '@mui/material';

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
  processordescription: string;
  shops: {
    shop_id: number;
    shop_name: string;
    price: number;
    warranty: string;
    in_stock: boolean;
    last_updated: string;
  }[];
}

interface ProductViewDialogProps {
  product: ShopProduct;
  open: boolean;
  onClose: () => void;
}

const ProductViewDialog: React.FC<ProductViewDialogProps> = ({
  product,
  open,
  onClose,
}) => {
  const shop = product.shops[0];

  const prices = product.shops.map((s) => s.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>{product.brand} {product.model}</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <CardMedia
              component="img"
              height="300"
              image={product.image_link}
              alt={product.model}
              sx={{ borderRadius: 2 }}
            />
            <Table>
              <TableBody>
                {product.shops.length > 1 && (
                  <>
                    <TableRow>
                      <TableCell>
                        Price Range
                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                          {minPrice.toLocaleString()} LKR to{' '}
                          {maxPrice.toLocaleString()} LKR
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={2}>
                        <Typography
                          variant="body2"
                          align="left"
                          sx={{ color: 'gray' }}
                        >
                          Available at {product.shops.length} stores
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </>
                )}
              </TableBody>
            </Table>
          </Grid>

          <Grid item xs={12} md={7}>
            <Table>
              <TableBody>
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
                  <TableCell>GPU</TableCell>
                  <TableCell>{product.gpu}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Weight</TableCell>
                  <TableCell>{product.weight}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Battery</TableCell>
                  <TableCell>{product.battery}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default ProductViewDialog;
