import React from 'react';
import {
  Slider,
  FormControlLabel,
  Checkbox,
  FormGroup,
  Typography,
  RadioGroup,
  Radio,
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
  selectedRAM: string[];
  setSelectedRAM: React.Dispatch<React.SetStateAction<string[]>>;
  selectedProcessors: string[];
  setSelectedProcessors: React.Dispatch<React.SetStateAction<string[]>>;
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
  selectedRAM,
  setSelectedRAM,
  selectedProcessors,
  setSelectedProcessors
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

  const handleRAMChange = (ram: string) => {
    setSelectedRAM((prev) => {
      if (prev.includes(ram)) {
        return prev.filter((r) => r !== ram);
      } else {
        return [...prev, ram];
      }
    });
  };

  const handleProcessorChange = (processor: string) => {
    setSelectedProcessors((prev) => {
      if (prev.includes(processor)) {
        return prev.filter((p) => p !== processor);
      } else {
        return [...prev, processor];
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

      {/* Brands Filter */}
      {/* Brands Filter */}
      <div className="filter-section">
        <Typography variant="subtitle1">Brands</Typography>
        <Box display="flex" flexWrap="wrap">
          {['Mackbook', 'MSI', 'Lenovo', 'ASUS','Apple','HP'].map((brand) => (
            <Box key={brand} width="50%"> {/* Adjust the width as needed */}
              <FormControlLabel
                control={
                  <Checkbox 
                    checked={selectedBrands.includes(brand)} 
                    onChange={() => handleBrandChange(brand)} 
                  />
                }
                label={brand}
                style={{ marginRight: '16px' }} // Optional: add space between checkboxes
              />
            </Box>
          ))}
        </Box>
      </div>

      {/* RAMs Filter */}
      <div className="filter-section">
        <Typography variant="subtitle1">RAM</Typography>
        <Box display="flex" flexWrap="wrap">
          {['4GB', '8GB', '16GB', '32GB'].map((ram) => (
            <Box key={ram} width="50%"> {/* Adjust the width as needed */}
              <FormControlLabel
                control={
                  <Checkbox 
                    checked={selectedRAM.includes(ram)} 
                    onChange={() => handleRAMChange(ram)} 
                  />
                }
                label={ram}
                style={{ marginRight: '16px' }} // Optional: add space between checkboxes
              />
            </Box>
          ))}
        </Box>
      </div>


      {/* Processor Filter */}
      <div className="filter-section">
        <Typography variant="subtitle1">Processor</Typography>
        <FormGroup>
          {['Intel® Core™ i9', 'Intel® Core™ i7', 'Intel® Core™ i5', 'Intel® Core™ i3'].map((processor) => (
            <FormControlLabel
              control={
                <Checkbox 
                  checked={selectedProcessors.includes(processor)} 
                  onChange={() => handleProcessorChange(processor)} 
                />
              }
              label={processor}
              key={processor}
            />
          ))}
        </FormGroup>
      </div>
    </aside>
  );
};

export default Sidebar;
