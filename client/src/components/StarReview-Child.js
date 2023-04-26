import React from "react";
import RevQuest from "./RevQuest";
const StarReviewChild = (props) => {
  const handleOutsideClick = () => {
    props.handleExit();
  };
  const handleInsideClick = (e) => {
    e.stopPropagation();
  };
  return (
    <div className="starReview-Screen" onClick={handleOutsideClick}>
      <div className="starReview-BigModal" onClick={handleInsideClick}>
        <div className="starReview-BigModal-topBar">
          <img
            className="starReview-closeButton"
            src="../images/close-button.png"
            alt="Close Modal Button"
            onClick={handleOutsideClick}
          />
          <div className="starReview-Title">
            Real Reviews From Real Customers
          </div>
        </div>
        <div className="starReview-BigModal-starBar">
          <div className="starReview-BigModal-starBar-stars">★★★★★</div>
          <div className="starReview-BigModal-starBar-text">610 Reviews</div>
        </div>
        <hr
          style={{
            marginTop: "0px",
            color: "#000000",
            height: "1px",
            width: "95%",
          }}
        />
        <div className="starReview-ScrollBox">
          <RevQuest drawSearch={false} />
        </div>
      </div>
    </div>
  );
};
export default StarReviewChild;
