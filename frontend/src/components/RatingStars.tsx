import React from 'react';
import { Rating } from '@mui/material';

interface RatingStarsProps {
  rating: number;
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating }) => {
  return (
    <div className="rating-stars">
      <Rating value={rating} readOnly precision={0.5} />
      <span>({rating})</span>
    </div>
  );
};

export default RatingStars;
