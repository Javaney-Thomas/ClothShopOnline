import React, { useState, useEffect } from "react";
import QuestionsEntry from "./QuestionsEntry";
import "./QuestionsSection.css";
const QuestionsSection = () => {
  const [questions, setQuestions] = useState([]);
  const questionPageNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // const host = "https://phill-in-the-blank.onrender.com";
  const host = "http://localhost:8000";
  const getQuestions = async () => {
    try {
      let response = await fetch(host + "/api/questions");
      let data = await response.json();
      setQuestions(data);
      console.log(questions);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getQuestions();
  }, []);
  return (
    <div>
      {questions.map((question, index) => {
        return <QuestionsEntry key={index} data={question} />;
      })}
      <div>
        <div className="review-flex review-link-always review-center">
          <div className="review-bold">{"<"}</div>
          <div className="review-space-long" />
          {questionPageNums.map((nums, index) => {
            return (
              <div className="review-flex">
                {nums}
                <div className="review-space-short" />
              </div>
            );
          })}
          <div className="review-space-long" />
          <div className="review-bold">{">"}</div>
        </div>
      </div>
    </div>
  );
};
export default QuestionsSection;