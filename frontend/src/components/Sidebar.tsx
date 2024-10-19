import React from 'react';
import {
  Slider,
  FormControlLabel,
  Checkbox,
  FormGroup,
  Typography,
  RadioGroup,
  Radio,
  Chip,
  Box,
  Stack,
} from '@mui/material';
import { Star } from '@mui/icons-material';

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <Typography variant="h6" gutterBottom>
        Search/Filter
      </Typography>

      {/* Price Filter */}
      <div className="filter-section">
        <Typography variant="subtitle1">Price</Typography>
        <Slider
          value={[0, 5000]}
          min={0}
          max={5000}
          step={100}
          valueLabelDisplay="auto"
        />
      </div>

      {/* Categories Filter */}
      <div className="filter-section">
        <Typography variant="subtitle1">Categories</Typography>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Tab" />
          <FormControlLabel control={<Checkbox />} label="Laptop" />
          <FormControlLabel control={<Checkbox />} label="Mobile" />
        </FormGroup>
      </div>

      {/* Rating Filter */}
      <div className="filter-section">
        <Typography variant="subtitle1">Rating</Typography>
        <Box display="flex" flexDirection="column">
          {[5, 4, 3, 2, 1].map((stars) => (
            <Box key={stars} display="flex" alignItems="center">
              {Array.from({ length: stars }, (_, i) => (
                <Star key={i} style={{ color: 'red' }} />
              ))}
            </Box>
          ))}
        </Box>
      </div>

      {/* Sub Categories Filter */}
      <div className="filter-section">
        <Typography variant="subtitle1">Sub Categories</Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap">
          {['Macbook Pro', 'Macbook Air', 'Pavilion', 'Thinkpad', 'Legion'].map(
            (subCategory) => (
              <Chip key={subCategory} label={subCategory} />
            )
          )}
        </Stack>
      </div>

      {/* Brands Filter */}
      <div className="filter-section">
        <Typography variant="subtitle1">Brands</Typography>
        <RadioGroup>
          {['Apple', 'Samsung', 'Microsoft', 'Lenovo', 'ASUS'].map((brand) => (
            <FormControlLabel key={brand} value={brand} control={<Radio />} label={brand} />
          ))}
        </RadioGroup>
      </div>

      {/* Colors Filter */}
      <div className="filter-section">
        <Typography variant="subtitle1">Colors</Typography>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Black" />
          <FormControlLabel control={<Checkbox />} label="Brown" />
          <FormControlLabel control={<Checkbox />} label="Silver" />
          <FormControlLabel control={<Checkbox />} label="White" />
          <FormControlLabel control={<Checkbox />} label="Blue" />
        </FormGroup>
      </div>

      {/* Shipping Filter */}
      <div className="filter-section">
        <Typography variant="subtitle1">Shipping</Typography>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Yes" />
          <FormControlLabel control={<Checkbox />} label="No" />
        </FormGroup>
      </div>
    </aside>
  );
};

export default Sidebar;
