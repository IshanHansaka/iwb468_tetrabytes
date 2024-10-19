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

interface SidebarProps {
  priceRange: [number, number];
  setPriceRange: React.Dispatch<React.SetStateAction<[number, number]>>;
  selectedCategories: string[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
  selectedRating: number | null;
  setSelectedRating: React.Dispatch<React.SetStateAction<number | null>>;
  selectedBrands: string[];
  setSelectedBrands: React.Dispatch<React.SetStateAction<string[]>>;
  selectedColors: string[];
  setSelectedColors: React.Dispatch<React.SetStateAction<string[]>>;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  priceRange, 
  setPriceRange, 
  selectedCategories, 
  setSelectedCategories, 
  selectedRating, 
  setSelectedRating,
  selectedBrands,
  setSelectedBrands,
  selectedColors,
  setSelectedColors
}) => {
  const handlePriceChange = (event: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      setPriceRange(newValue as [number, number]);
    }
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((c) => c !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  const handleRatingChange = (rating: number) => {
    setSelectedRating((prev) => (prev === rating ? null : rating));
  };

  const handleBrandChange = (brand: string) => {
    setSelectedBrands((prev) => {
      if (prev.includes(brand)) {
        return prev.filter((b) => b !== brand);
      } else {
        return [...prev, brand];
      }
    });
  };

  const handleColorChange = (color: string) => {
    setSelectedColors((prev) => {
      if (prev.includes(color)) {
        return prev.filter((c) => c !== color);
      } else {
        return [...prev, color];
      }
    });
  };

  return (
    <aside className="sidebar">
      <Typography variant="h6" gutterBottom>
        Search/Filter
      </Typography>

      {/* Price Filter */}
      <div className="filter-section">
        <Typography variant="subtitle1">Price</Typography>
        <Slider
          value={priceRange}
          onChange={handlePriceChange}
          min={0}
          max={5000}
          step={100}
          valueLabelDisplay="auto"
        />
        <p>
          Price Range: ${priceRange[0]} - ${priceRange[1]}
        </p>
      </div>

      {/* Categories Filter */}
      <div className="filter-section">
        <Typography variant="subtitle1">Categories</Typography>
        <FormGroup>
          {['Tab', 'Laptop', 'Mobile'].map((category) => (
            <FormControlLabel
              control={
                <Checkbox 
                  checked={selectedCategories.includes(category)} 
                  onChange={() => handleCategoryChange(category)} 
                />
              }
              label={category}
              key={category}
            />
          ))}
        </FormGroup>
      </div>
      {/* Brands Filter */}
      <div className="filter-section">
        <Typography variant="subtitle1">Brands</Typography>
        <FormGroup>
          {['Apple', 'Samsung', 'Microsoft', 'Lenovo', 'ASUS', 'HP'].map((brand) => (
            <FormControlLabel
              control={
                <Checkbox 
                  checked={selectedBrands.includes(brand)} 
                  onChange={() => handleBrandChange(brand)} 
                />
              }
              label={brand}
              key={brand}
            />
          ))}
        </FormGroup>
      </div>

      {/* Rating Filter */}
      <div className="filter-section">
        <Typography variant="subtitle1">Rating</Typography>
        <Box display="flex" flexDirection="column">
          {[5, 4, 3, 2, 1].map((stars) => (
            <Box key={stars} display="flex" alignItems="center">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedRating === stars}
                    onChange={() => handleRatingChange(stars)}
                  />
                }
                label={
                  <Box display="flex" alignItems="center">
                    {Array.from({ length: stars }, (_, i) => (
                      <Star key={i} style={{ color: 'red' }} />
                    ))}
                  </Box>
                }
              />
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
      </div>/*

      

      {/* Colors Filter */}
      <div className="filter-section">
        <Typography variant="subtitle1">Colors</Typography>
        <FormGroup>
          {['Black', 'White', 'Silver', 'Blue', 'Brown'].map((color) => (
            <FormControlLabel
              control={
                <Checkbox 
                  checked={selectedColors.includes(color)} 
                  onChange={() => handleColorChange(color)} 
                />
              }
              label={color}
              key={color}
            />
          ))}
        </FormGroup>
      </div>
    </aside>
  );
};

export default Sidebar;
