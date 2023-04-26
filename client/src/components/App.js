import React from "react";
import { useState } from "react";
import "./App.css";
import Header from "./Header.js";
import ProductLink from "./ProductLink";
import ProductImage from "./ProductImage";
import ColorPicker from "./ColorPicker";
import Tabs from "./detailsizechart.js";
import Carousel from "./bestsellers.js";
import CarouselA from "./bestsellersR2.js";
import CarouselB from "./bestsellersR3.js";
import OverallReview from "./overallReviews.js";
import RevQuest from "./RevQuest";
import FooterComponent from "./footer";
import StarReview from "./StarReview";
import StarReviewChild from "./StarReview-Child";
const App = () => {
  const [showSmallModal, setShowSmallModal] = useState(true);
  const [showBigModal, setShowBigModal] = useState(false);
  const launchBigReviewsModal = () => {
    setShowSmallModal(false);
    setShowBigModal(true);
  };
  const launchSmallReviewsModal = () => {
    setShowBigModal(false);
    setShowSmallModal(true);
  };
  return (
    <div style={{ flexWrap: "wrap", display: "flex" }}>
      <div
        style={{
          maxWidth: "1300px",
          marginLeft: "auto",
          marginRight: "auto",
          position: "relative",
        }}
      >
        <Header />
        <ProductLink />
        <div style={{ width: "100%", flexWrap: "wrap", display: "flex" }}>
          <div style={{ width: "40%" }}>
            <ProductImage />
          </div>
          <div style={{ width: "60%" }}>
            <ColorPicker />
            <Tabs />
          </div>
        </div>
        <Carousel />
        <CarouselA />
        <CarouselB />
        <OverallReview />
        <RevQuest />
        <FooterComponent />
      </div>
      <div style={{ position: "fixed", height: "100vh", width: "2px" }}>
        {showSmallModal ? (
          <StarReview handleClick={launchBigReviewsModal} />
        ) : null}
      </div>
      {showBigModal ? (
        <StarReviewChild handleExit={launchSmallReviewsModal} />
      ) : null}
    </div>
  );
};
export default App;