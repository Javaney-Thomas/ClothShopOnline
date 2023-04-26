import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ReviewsSection from "./ReviewsSection.js";
import QuestionsSection from "./QuestionsSection.js";
import "../componentsCSS/revQuest.css";
const RevQuest = (props) => {
  const [currentDiv, setCurrentDiv] = useState("Reviews");
  const [drawSearch, setDrawSearch] = useState(true);
  const handleReviewsClick = async () => {
    console.log("Selected Reviews");
    setCurrentDiv("Reviews");
  };
  const handleQuestionsClick = async () => {
    console.log("Selected Questions");
    setCurrentDiv("Questions");
  };
  useEffect(() => {
    props.drawSearch == false ? setDrawSearch(false) : setDrawSearch(true);
  }, []);
  return (
    <div className="reviews-questions-all">
      <div
        className={
          currentDiv == "Reviews"
            ? "reviews-questions-button selected"
            : "reviews-questions-button"
        }
        onClick={handleReviewsClick}
      >
        REVIEWS
      </div>
      <div
        className={
          currentDiv == "Questions"
            ? "reviews-questions-button selected"
            : "reviews-questions-button"
        }
        onClick={handleQuestionsClick}
      >
        QUESTIONS
      </div>
      {drawSearch ? (
        <hr
          style={{
            marginTop: "0px",
            color: "#000000",
            height: "1px",
            width: "95%",
          }}
        />
      ) : null}
      {currentDiv == "Questions" ? (
        <QuestionsSection />
      ) : (
        <ReviewsSection drawSearch={drawSearch} />
      )}
    </div>
  );
};
export default RevQuest;