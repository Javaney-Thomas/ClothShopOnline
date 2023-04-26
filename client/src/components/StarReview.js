import React from "react";
import "../componentsCSS/starReview.css";
const StarReview = (props) => {
  return (
    <>
      <div className="starReview-Launcher" onClick={props.handleClick}>
        ★ Reviews
      </div>
    </>
  );
};
export default StarReview;
