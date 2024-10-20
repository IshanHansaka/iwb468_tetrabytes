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

interface SidebarProps {
  priceRange: [number, number];
  setPriceRange: React.Dispatch<React.SetStateAction<[number, number]>>;
  selectedBrands: string[];
  setSelectedBrands: React.Dispatch<React.SetStateAction<string[]>>;
  selectedProcessors: string[];
  setSelectedProcessors: React.Dispatch<React.SetStateAction<string[]>>;
  selectedRAM: string[];
  setSelectedRAM: React.Dispatch<React.SetStateAction<string[]>>;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  priceRange, 
  setPriceRange, 
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

  const handleRAMChange = (short_ram: string) => {
    setSelectedRAM((prev) => {
      if (prev.includes(short_ram)) {
        return prev.filter((r) => r !== short_ram);
      } else {
        return [...prev, short_ram];
      }
    });
  };

  const handleProcessorChange = (short_processor: string) => {
    setSelectedProcessors((prev) => {
      if (prev.includes(short_processor)) {
        return prev.filter((p) => p !== short_processor);
      } else {
        return [...prev, short_processor];
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
          max={2000000}
          step={100}
          valueLabelDisplay="auto"
        />
        <p>
          Price Range: {priceRange[0]} lkr - {priceRange[1]} lkr
        </p>
      </div>

      {/* Brands Filter */}
      <div className="filter-section">
        <Typography variant="subtitle1">Brands</Typography>
        <Box display="flex" flexWrap="wrap">
          {['Acer', 'Apple', 'ASUS','Dell', 'HP', 'Lenovo', 'MSI'].map((brand) => (
            <Box key={brand} width="50%">
              <FormControlLabel
                control={
                  <Checkbox 
                    checked={selectedBrands.includes(brand)} 
                    onChange={() => handleBrandChange(brand)} 
                  />
                }
                label={brand}
                style={{ marginRight: '16px' }}
              />
            </Box>
          ))}
        </Box>
      </div>

      <div className="filter-section">
        <Typography variant="subtitle1">RAM</Typography>
        <Box display="flex" flexWrap="wrap">
          {['4GB', '8GB', '16GB', '32GB'].map((short_ram) => (
            <Box key={short_ram} width="50%">
              <FormControlLabel
                control={
                  <Checkbox 
                    checked={selectedRAM.includes(short_ram)} 
                    onChange={() => handleRAMChange(short_ram)} 
                  />
                }
                label={short_ram}
                style={{ marginRight: '16px' }} 
              />
            </Box>
          ))}
        </Box>
      </div>


      <div className="filter-section">
        <Typography variant="subtitle1">Processor</Typography>
        <FormGroup>
          {['Intel Core i9', 'Intel Core i7', 'Intel Core i5', 'Intel Core i3', 'Ryzen 5', 'Apple M3'].map((short_processor) => (
            <FormControlLabel
              control={
                <Checkbox 
                  checked={selectedProcessors.includes(short_processor)} 
                  onChange={() => handleProcessorChange(short_processor)} 
                />
              }
              label={short_processor}
              key={short_processor}
            />
          ))}
        </FormGroup>
      </div>
    </aside>
  );
};

export default Sidebar;
