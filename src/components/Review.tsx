import React from 'react';
import './Review.css';

interface ReviewProps {
  rating: number; // 1-5 stars
  reviewerName: string;
  reviewText: string;
  date?: string; // Optional date
  verified?: boolean; // Optional verified badge
}

const Review: React.FC<ReviewProps> = ({ 
  rating, 
  reviewerName, 
  reviewText, 
  date, 
  verified = false 
}) => {
  // Generate star elements
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span 
          key={i} 
          className={`star ${i <= rating ? 'filled' : 'empty'}`}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="review-card">
      <div className="review-header">
        <div className="stars-container">
          {renderStars()}
        </div>
        <div className="reviewer-info">
          <div className="reviewer-name">
            {reviewerName}
            {verified && <span className="verified-badge">✓</span>}
          </div>
          {date && <div className="review-date">{date}</div>}
        </div>
      </div>
      <div className="review-content">
        <p className="review-text">{reviewText}</p>
      </div>
    </div>
  );
};

export default Review;
