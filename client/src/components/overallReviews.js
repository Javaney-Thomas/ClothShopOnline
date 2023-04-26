import React, { useState } from "react";
import "../componentsCSS/overallReviews.css";
import "../componentsCSS/satisfaction.css";
import "../componentsCSS/productSize.css";
import "../componentsCSS/scale.css";
import "../componentsCSS/overallBtn.css";
import "../componentsCSS/askquestion.css";
import "../componentsCSS/writeAReview.css";
import WriteAReview from "./writeAReview";
import AskQuestion from "./askQuestion";
export default function OverallReview() {
  const ratingValue = 4.8; // Replace with your rating value
  const filledStars = "★".repeat(Math.ceil(ratingValue));
  const emptyStars = "☆".repeat(5 - Math.ceil(ratingValue));
  const [currentDiv, setCurrentDiv] = useState("None");
  return (
    <div className="Overall-Review-Component">
      <hr className="solid1" />
      <div className="overallReviewContainer">
        <span className="starRating">
          <span className='ratingvalue' style={{ fontSize: "50px", color:"#6B6D76", fontWeight:"600"}}>
            {ratingValue.toFixed(1)}</span>
          <span style={{ fontSize:"32px", color:"#167FAC" }}>{filledStars}</span>
          <span style={{ color: "#ccc" }}>{emptyStars}</span>
          <span>{" 610 Reviews, 15 Q&As"}</span>
        </span>
        <div className="innerContainer">
          <span className="overallRatings">Overall Rating</span>
          <div className="ratingBar1Container">
          <span className="ratingBar1"></span>
          <span className="ratingBar1"></span>
          <span className="ratingBar1"></span>
          <span className="ratingBar1"></span>
          <span className="ratingBar1"></span>
          <span className="fit">Fit</span>
          <span className="trueToSize">True to size</span>
          <span className="quality">Quality of Material</span>
          <span className="ratingBar2"></span>
          <span className="ratingBar2"></span>
          <span className="ratingBar2"></span>
          <span className="ratingBar2"></span>
          <span className="ratingBar2"></span>
          </div>
        </div>
      </div>
      <div className="dropdowndiv">
        <div className="buttondiv">
          <button
            className="Review"
            onClick={() => {
              setCurrentDiv("Review");
            }}
          >
            Write A Review
          </button>
          <button
            className="Question"
            onClick={() => {
              setCurrentDiv("Question");
            }}
          >
            Ask A Question
          </button>
        </div>
      </div>
      {currentDiv === "Review" ? <WriteAReview /> : null}
      {currentDiv === "Question" ? <AskQuestion /> : null}
    </div>
  );
}