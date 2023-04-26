import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ColorPickerSizeColumn from "./ColorPicker-SizeColumn.js";
import "../componentsCSS/colorPicker.css";
function ColorPicker() {
  const [productName, setProductName] = useState(
    "Heavy Blend™ Hooded Sweatshirt - Gildan 18500"
  );
  const [reviewCount, setReviewCount] = useState(610);
  const [currentColor, setCurrentColor] = useState("White");
  const [displayColor, setDisplayColor] = useState("White");
  const [sizes, setSizes] = useState([]);
  // const host = "https://phill-in-the-blank.onrender.com";
  const host = "http://localhost:8000";
  const colorList = [
    "White",
    "Black",
    "Antique Cherry Red",
    "Antique Sapphire",
    "Ash",
    "Azalea",
    "Cardinal Red",
    "Carolina Blue",
    "Charcoal",
    "Cherry Red",
    "Dark Chocolate",
    "Dark Heather",
    "Forest",
    "Garnet",
    "Gold",
    "Graphite Heather",
    "Heather Sport Dark Green",
    "Heather Sport Dark Maroon",
    "Heather Sport Dark Navy",
    "Heather Sport Royal",
    "Heather Sport Scarlet Red",
    "Heliconia",
    "Indigo Blue",
    "Irish Green",
    "Light Blue",
    "Light Pink",
    "Maroon",
    "Military Green",
    "Mint Green",
    "Navy",
    "Old Gold",
    "Orange",
    "Orchid",
    "Purple",
    "Red",
    "Royal",
    "Safety Green",
    "Safety Orange",
    "Safety Pink",
    "Sand",
    "Sapphire",
    "Sport Grey",
    "Violet",
  ];

  const getSizeData = async () => {
    try {
      let response = await fetch(
        host + "/api/sizes/product/1/color/" + currentColor
      );
      let data = await response.json();
      setSizes(data);
    } catch (err) {
      console.error(err.message);
    }
  };
  const handleMouseClick = async (color) => {
    console.log("Selected color: ", color);
    setCurrentColor(color);
  };
  useEffect(() => {
    getSizeData();
  }, []);
  useEffect(() => {
    getSizeData();
  }, [currentColor]);
  let src = `../images/color-buttons/${currentColor}.jpg`;
  return (
    <div className="colorPicker-all">
      <div className="colorPicker-productName">{productName}</div>
      <div className="colorPicker-review">
        <div className="blueColor stars">★★★★★</div>({reviewCount})
      </div>
      <div>
        <b>Color: </b>
        {displayColor}
      </div>
      <div className="colorPicker-color-div">
        {colorList.map((color, index) => {
          const src = `../images/color-buttons/${color}.jpg`;
          const alt = `Select Color ${currentColor}`;
          const className =
            color == currentColor
              ? "colorPicker-colorButton colorPicker-selectedButton"
              : "colorPicker-colorButton";
          return (
            <img
              className={className}
              alt={alt}
              src={src}
              key={index}
              onMouseEnter={() => {
                setDisplayColor(color);
              }}
              onMouseLeave={() => {
                setDisplayColor(currentColor);
              }}
              onClick={() => {
                handleMouseClick(color);
              }}
            />
          );
        })}
      </div>
      <div className="colorPicker-sizeTable">
        <div className="colorPicker-sizeHeader">
          <div className="colorPicker-size">Size</div>
          <div className="colorPicker-price ">Price</div>
          <div className="colorPicker-salePrice">Sale Price</div>
          <div className="colorPicker-available">available</div>
          <img className="colorPicker-colorButton" src={src} />
        </div>
        {/* {sizes.map((thisSize, index) => {
          return <ColorPickerSizeColumn key={index} data={thisSize} />;
        })} */}
      </div>
      <div className="colorPicker-addToCart blueBackground">ADD TO CART</div>
      <select name="userList" id="userList" className="colorPicker-listSelect">
        <option value="Select">Select List</option>
        <option value="Create">Create List & Add Item</option>
      </select>
      <div className="colorPicker-addToList">ADD TO LIST</div>
    </div>
  );
}
export default ColorPicker;
