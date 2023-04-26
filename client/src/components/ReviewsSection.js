import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ReviewsEntry from "./ReviewsEntry.js";
import "../componentsCSS/revQuest.css";

const ReviewSection = (props) => {
  const [allReviews, setAllReviews] = useState([]);
  // const host = "https://phill-in-the-blank.onrender.com";
  const host = "http://localhost:8000";
  const reviewPageNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const getReviewData = async () => {
    try {
      let response = await fetch(host + "/api/reviews");
      let data = await response.json();
      setAllReviews(data);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getReviewData();
  }, []);
  return (
    <div className="reviews-all">
      {props.drawSearch ? (
        <div className="reviews-dropdowns">
          <select name="Rating" id="Rating" className="reviews-dropdown">
            <option selected disabled>
              Rating
            </option>
            <option value="All">All</option>
            <option value="5.0">★★★★★</option>
            <option value="4.0">★★★★☆</option>
            <option value="3.0">★★★☆☆</option>
            <option value="2.0">★★☆☆☆</option>
            <option value="1.0">★☆☆☆☆</option>
          </select>
          <select
            name="Images&Videos"
            id="Images&Videos"
            className="reviews-dropdown"
          >
            <option selected disabled>
              Images & Videos
            </option>
            <option value="All">All</option>
            <option value="With">With Images & Videos</option>
          </select>
          <select name="Delivery" id="Delivery" className="reviews-dropdown">
            <option selected disabled>
              Delivery
            </option>
            <option value="All">All</option>
            <option value="Early">Early</option>
            <option value="On time">On time</option>
            <option value="Late">Late</option>
          </select>
          <select
            name="Decoration"
            id="Decoration"
            className="reviews-dropdown"
          >
            <option selected disabled>
              Decoration Method
            </option>
            <option value="All">All</option>
            <option value="5.0">Sublimation</option>
            <option value="4.0">Heat Transfer</option>
            <option value="3.0">Screen Printing</option>
            <option value="2.0">Tie Dye</option>
            <option value="1.0">Embroidery</option>
            <option value="1.0">Direct ot Garment</option>
            <option value="1.0">Keep it blank</option>
          </select>
          <select name="Rating" id="Rating" className="reviews-dropdown">
            <option selected disabled>
              Overall Rating
            </option>
            <option value="All">All</option>
            <option value="1.0">Not Satisfied</option>
            <option value="2.0">Somewhat Satisfied</option>
            <option value="3.0">Satisfied</option>
            <option value="4.0">Very Satisfied</option>
            <option value="5.0">Extremely Satisfied</option>
          </select>
          <select name="Quality" id="Quality" className="reviews-dropdown">
            <option selected disabled>
              Quality
            </option>
            <option value="All">All</option>
            <option value="1.0">1</option>
            <option value="2.0">2</option>
            <option value="3.0">3</option>
            <option value="4.0">4</option>
            <option value="5.0">5</option>
          </select>
          <select name="Fit" id="Fit" className="reviews-dropdown">
            <option selected disabled>
              Fit
            </option>
            <option value="All">All</option>
            <option value="Runs small">Runs small</option>
            <option value="True to size">True to size</option>
            <option value="Runs big">Runs big</option>
          </select>
          <h3>{allReviews.length + 600} Reviews</h3>
        </div>
      ) : null}
      {/* {allReviews.map((review, index) => {
        return (
          <ReviewsEntry
            key={index}
            data={review}
            drawSearch={props.drawSearch}
          />
        );
      })} */}
      <div>
        <div className="review-flex review-center">
          <div className="review-bold review-link-always">{"<"}</div>
          <div className="review-space-long" />
          {reviewPageNums.map((num, index) => {
            return (
              <div className="review-flex">
                <div className=" review-link-always">{num}</div>
                <div className="review-space-short" />
              </div>
            );
          })}
          <div className="review-space-long" />
          <div className="review-bold  review-link-always">{">"}</div>
        </div>
      </div>
    </div>
  );
};
export default ReviewSection;