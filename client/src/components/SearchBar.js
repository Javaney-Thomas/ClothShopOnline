import React from "react";
import "../componentsCSS/dropdowns.css";
const SearchBar = (props) => {
  return (
    <>
      <div className="HeaderComponent-SearchBar">
        <input
          className="HeaderComponent-input"
          placeholder="Search entire store..."
        ></input>
        <div>
          <img
            className="HeaderComponent-SearchButton"
            src="../images/Search.png"
          />
        </div>
      </div>
    </>
  );
};
export default SearchBar;
