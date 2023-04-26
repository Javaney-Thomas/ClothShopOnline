import React from "react";
import "../componentsCSS/colorPicker.css";
function ColorPickerSizeColumn({ data }) {
  if (data.numavailable > 0) {
    return (
      <div className="colorPicker-sizeColumn">
        <div className="colorPicker-size">{data.size}</div>
        <div className="colorPicker-price ">{data.price}</div>
        {data.saleprice ? (
          <div className="colorPicker-salePrice">{data.saleprice}</div>
        ) : (
          <div className="colorPicker-empty">_</div>
        )}
        {data.numavailable <= 1000 ? (
          <div className="colorPicker-available">{data.numavailable}</div>
        ) : (
          <div className="colorPicker-available">999+</div>
        )}
        <input className="colorPicker-orderInput" type="text"></input>
      </div>
    );
  }
}
export default ColorPickerSizeColumn;