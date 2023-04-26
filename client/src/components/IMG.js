import React from "react";
import ReactImageMagnify from "react-image-magnify";
import "../componentsCSS/productimage.css";
const IMG = ({ imageLink }) => {
  return (
    <div className="IMG_container">
      <div className="IMG_magnifyer">
        <ReactImageMagnify
          {...{
            lensStyle: {
              background: "rgba(0,0,0,0)",
              border: "1px",
            },
            smallImage: {
              alt: "Product Image",
              isFluidWidth: true,
              src: imageLink,
            },
            largeImage: {
              src: imageLink,
              width: 1120,
              height: 1800,
            },
            lensStyle: {
              cursor: "zoom-in",
            },
          }}
        />
      </div>
    </div>
  );
};
export default IMG;