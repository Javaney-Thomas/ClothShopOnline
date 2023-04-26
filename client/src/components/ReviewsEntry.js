import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import RatingBar from "./RatingBar";
import "../componentsCSS/revQuest.css";
const ReviewsEntry = ({ data, drawSearch }) => {
  const [starRating, setStarRating] = useState("");
  const [shareLinks, setShareLinks] = useState(false);
  const getStarRating = () => {
    const starsArray = [0, "★☆☆☆☆", "★★☆☆☆", "★★★☆☆", "★★★★☆", "★★★★★"];
    setStarRating(starsArray[Math.floor(data.rating)]);
  };
  const handleShareLinks = () => {
    setShareLinks(shareLinks ? false : true);
  };
  useEffect(() => {
    getStarRating();
  }, []);
  return (
    <div className="review-entry">
      <div className="review-userLeft">
        <div className="review-pic">{data.username[0]}</div>
      </div>
      <div className="review-userRight">
        <div>
          <div className="review-flex">
            <div className="review-username">{data.username}</div>
            {data.isverified ? "Verified Buyer" : null}
          </div>
          <div className="review-align-right">{data.date}</div>
        </div>
        <div className="review-stars">{starRating}</div>
        <br />
        {drawSearch ? (
          <div>
            <div className="review-flex">
              <div className="review-italic">Delivery:</div>
              <div>{data.delivery}</div>
            </div>
            {data.decoration != null ? (
              <div className="review-flex">
                <div className="review-italic">Decoration Method:</div>
                <div>{data.decoration}</div>
              </div>
            ) : null}
            <br />
            <div className="review-flex">
              {data.overallrating != null ? (
                <RatingBar title="Overall Rating" rating={data.overallrating} />
              ) : null}
              {data.fit != null ? (
                <div className="review-flex">
                  Fit <div className="review-space-short" />
                  <div className="review-bold">{data.fit}</div>
                  <div className="review-space-long" />
                </div>
              ) : null}
              {data.qualityrating != null ? (
                <div>
                  <RatingBar title="Quality" rating={data.qualityrating} />
                  <br />
                </div>
              ) : null}
            </div>
          </div>
        ) : null}
        <div className="review-bold">{data.title}</div>
        <div>{data.notes}</div>
        <br />
        <div className="review-flex">
          <div className="review-flex">
            <img
              className="review-image review-link"
              src="../images/share.png"
            />
            <div className="review-space-short" />
            <div className="review-link" onClick={handleShareLinks}>
              Share |
            </div>
            {shareLinks ? (
              <div className="review-flex">
                <div className="review-space-short" />
                <div className=" review-link">Facebook</div>
                <div className="review-space-short" />
                {"•"}
                <div className="review-space-short" />
                <div className=" review-link">Twitter</div>
                <div className="review-space-short" />
                {"•"}
                <div className="review-space-short" />
                <div className=" review-link">LinkedIn</div>
                <div className="review-space-short" />
                {"|"}
              </div>
            ) : null}
          </div>
          <div className="review-align-right review-flex">
            <div>Was This Review Helpful?</div>
            <div className="review-space-short" />
            <img
              className="review-image review-link"
              src="../images/thumbsup.png"
            />
            <div style={{ width: "5px" }} />
            {data.numthumbsup}
            <div className="review-space-short" />
            <img
              className="review-image review-link"
              src="../images/thumbsdown.png"
            />
            <div style={{ width: "5px" }} />
            {data.numthumbsdown}
          </div>
        </div>
        <br />
      </div>
      <hr
        style={{
          marginTop: "0px",
          color: "#000000",
          height: "1px",
          width: "95%",
        }}
      />
    </div>
  );
};
export default ReviewsEntry;