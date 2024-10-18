import React from 'react';

interface RatingStarsProps {
  rating: number;
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating }) => {
  return (
    <div className="rating-stars">
      {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
      <span>({rating})</span>
    </div>
  );
};

export default RatingStars;
