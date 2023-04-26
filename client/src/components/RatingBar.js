import React from "react";
const RatingBar = ({ title, rating }) => {
  return (
    <div className="review-RatingBar">
      {title}
      <div className="review-space-short" />
      {rating >= 1 ? (
        <div className="review-RatingFull"></div>
      ) : (
        <div className="review-RatingEmpty"></div>
      )}
      {rating >= 2 ? (
        <div className="review-RatingFull"></div>
      ) : (
        <div className="review-RatingEmpty"></div>
      )}
      {rating >= 3 ? (
        <div className="review-RatingFull"></div>
      ) : (
        <div className="review-RatingEmpty"></div>
      )}
      {rating >= 4 ? (
        <div className="review-RatingFull"></div>
      ) : (
        <div className="review-RatingEmpty"></div>
      )}
      {rating >= 5 ? (
        <div className="review-RatingFull"></div>
      ) : (
        <div className="review-RatingEmpty"></div>
      )}
      <div className="review-space-long" />
    </div>
  );
};
export default RatingBar;