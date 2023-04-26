import React from "react";
import "./QuestionsSection.css";
const QuestionsEntry = ({ data }) => {
  return (
    <div className="review-entry">
      <div className="review-line"></div>
      <div className="review-userLeft">
        <div className="review-pic">{data.usernameq[0]}</div>
      </div>
      <div className="review-userRight">
        <div>
          <div className="review-flex">
            <div className="review-username">{data.usernameq}</div>
            {data.isverified ? "Verified Buyer" : null}
          </div>
          <div className="review-align-right">{data.datequestion}</div>
          <div>Q: {data.question}</div>
        </div>
        <br />
        <div className="review-flex">
          <div className="review-userLeft">
            <div className="review-pic"></div>
          </div>
          <div className="review-userRight">
            <div>
              <div className="review-flex">
                <div className="review-username">{data.usernamea}</div>
              </div>
              <div className="review-align-right">{data.dateanswer}</div>
              <div>A: {data.answer}</div>
            </div>
          </div>
        </div>
        <br />
        <div className="review-bold">{data.title}</div>
        <div>{data.notes}</div>
        <br />
        <div>
          <div className="review-align-right review-flex">
            <div>Was This Answer Helpful?</div>
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
        <hr
          style={{
            marginTop: "0px",
            color: "#000000",
            height: "1px",
            width: "95%",
          }}
        />
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
export default QuestionsEntry;