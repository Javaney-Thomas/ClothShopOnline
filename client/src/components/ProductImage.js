// import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";
// import IMG from "./IMG.js";
// import "../componentsCSS/productimage.css";
// const ProductImage = () => {
//   const [images, setImages] = useState([]);
//   let [currentImage, setCurrentImage] = useState(2);
//   const rotateMainImageRight = () => {
//     if (currentImage == images.length - 1) {
//       setCurrentImage(1);
//     } else {
//       setCurrentImage(currentImage + 1);
//     }
//   };
//   const rotateMainImageLeft = () => {
//     if (currentImage == 1) {
//       setCurrentImage(images.length - 1);
//     } else {
//       setCurrentImage(currentImage - 1);
//     }
//   };
//   const rotateMainImageThis = (num) => {
//     setCurrentImage(num);
//   };

//   useEffect(() => {
//     setImages([
//       "../images/product-image/Video-Btn.png",
//       "../images/product-image/White-side.jpg",
//       "../images/product-image/White-front.jpg",
//       "../images/product-image/White-back.jpg",
//       "../images/product-image/Gildan-18500.jpg",
//     ]);
//     setCurrentImage(2);
//   }, []);

//   return (
//     <div className="productImage-all">
//       <div className="productImage-top">
//         <IMG imageLink={images[currentImage]} />
//         <div className="productImage-top-left">
//           <img
//             src="../images/arrow-left.png"
//             onClick={rotateMainImageLeft}
//             height={"32px"}
//             width={"32px"}
//           />
//         </div>
//         <div className="productImage-top-right">
//           <img
//             src="../images/arrow-right.png"
//             onClick={rotateMainImageRight}
//             height={"32px"}
//             width={"32px"}
//           />
//         </div>
//       </div>

//       <div className="productImage-middle">
//         <img
//           className="productImage-thumbnail"
//           src={images[0]}
//           onClick={() => {
//             rotateMainImageThis(0);
//           }}
//         />
//         <img
//           className="productImage-thumbnail"
//           src={images[1]}
//           onClick={() => {
//             rotateMainImageThis(1);
//           }}
//         />
//         <img
//           className="productImage-thumbnail"
//           src={images[2]}
//           onClick={() => {
//             rotateMainImageThis(2);
//           }}
//         />
//         <img
//           className="productImage-thumbnail"
//           src={images[3]}
//           onClick={() => {
//             rotateMainImageThis(3);
//           }}
//         />
//         <img
//           className="productImage-thumbnail"
//           src={images[4]}
//           onClick={() => {
//             rotateMainImageThis(4);
//           }}
//         />
//       </div>
//       <div className="productImage-bottom">
//         <div className="productImage-bottom-large">Free 100 Day Returns</div>
//         <div className="productImage-bottom-small">
//           Not quite right? You have 100 days to return your items, 100% free!
//         </div>
//       </div>
//     </div>
//   );
// };
// export default ProductImage;

import React, { useState, useEffect } from "react";
import IMG from "./IMG.js";
import "../componentsCSS/productimage.css";

const ProductImage = () => {
  const [images, setImages] = useState([]);
  let [currentImage, setCurrentImage] = useState(2);
  const rotateMainImageRight = () => {
    if (currentImage === images.length - 1) {
      setCurrentImage(1);
    } else {
      setCurrentImage(currentImage + 1);
    }
  };
  const rotateMainImageLeft = () => {
    if (currentImage === 1) {
      setCurrentImage(images.length - 1);
    } else {
      setCurrentImage(currentImage - 1);
    }
  };
  const rotateMainImageThis = (num) => {
    setCurrentImage(num);
  };

  useEffect(() => {
    const imageUrls = [
      "../images/product-image/Video-Btn.png",
      "../images/product-image/White-side.jpg",
      "../images/product-image/White-front.jpg",
      "../images/product-image/White-back.jpg",
      "../images/product-image/Gildan-18500.jpg",
    ];

    const preloadImages = async () => {
      try {
        const promises = imageUrls.map((url) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = resolve;
            img.onerror = reject;
            img.src = url;
          });
        });

        await Promise.all(promises);

        // Once all images are preloaded, set the state of images
        setImages(imageUrls);
      } catch (error) {
        console.error("Failed to preload images", error);
      }
    };

    preloadImages();
  }, []);

  return (
    <div className="productImage-all">
      <div className="productImage-top">
        <IMG imageLink={images[currentImage]} />
        <div className="productImage-top-left">
          <img
            src="../images/arrow-left.png"
            alt="no"
            onClick={rotateMainImageLeft}
            height={"32px"}
            width={"32px"}
          />
        </div>
        <div className="productImage-top-right">
          <img
            src="../images/arrow-right.png"
            alt="no2"
            onClick={rotateMainImageRight}
            height={"32px"}
            width={"32px"}
          />
        </div>
      </div>

      <div className="productImage-middle">
        {images.map((image, index) => (
          <img
            key={index}
            className="productImage-thumbnail"
            src={image}
            alt="no3"
            onClick={() => {
              rotateMainImageThis(index);
            }}
          />
        ))}
      </div>
      <div className="productImage-bottom">
        <div className="productImage-bottom-large">Free 100 Day Returns</div>
        <div className="productImage-bottom-small">
          Not quite right? You have 100 days to return your items, 100% free!
        </div>
      </div>
    </div>
  );
};

export default ProductImage;