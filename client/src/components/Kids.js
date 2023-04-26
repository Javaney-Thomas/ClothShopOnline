import React from "react";

const Kids = ({ handleOpenK, handleCloseK }) => {
  const kids = {
    AllKids: "All Kids",
    Baby: ["Tops", "Onesies", "Bottoms", "Accessories"],
    Boys: [
      "School",
      "Polos",
      "T-Shirts",
      "Tank Tops",
      "Sweatshirts",
      "Pants",
      "Coats & Jackets",
    ],
    Girls: [
      "School",
      "T-Shirts",
      "Tank Tops",
      "Sweatshirts",
      "Pants & Leggings",
      "Coats & Jackets",
    ],
    Unisex: [
      "Polos",
      "T-Shirts & Tops",
      "Long Sleeves",
      "Sweatshirts",
      "Bottoms",
    ],
  };
  return (
    <>
      <div className="HeaderCompenent-KidsModal" onMouseLeave={handleCloseK}>
        <div className="HeaderCompenent-KidsModalContent">
          <h5 className="HeaderCompenent-KidsModalContentHeader">
            {kids.AllKids}
          </h5>
        </div>
        <div className="HeaderCompenent-KidsModalContent">
          <h5 className="HeaderCompenent-KidsModalContentHeader">Baby</h5>
          <ul>
            {kids.Baby.map((w) => {
              return (w = <li>{w}</li>);
            })}
          </ul>
        </div>
        <div className="HeaderCompenent-KidsModalContent">
          <h5 className="HeaderCompenent-KidsModalContentHeader">Boys</h5>
          <ul>
            {kids.Boys.map((w) => {
              return (w = <li>{w}</li>);
            })}
          </ul>
        </div>
        <div className="HeaderCompenent-KidsModalContent">
          <h5 className="HeaderCompenent-KidsModalContentHeader">Girls</h5>
          <ul>
            {kids.Girls.map((w) => {
              return (w = <li>{w}</li>);
            })}{" "}
          </ul>
        </div>
        <div className="HeaderCompenent-KidsModalContent">
          <h5 className="HeaderCompenent-KidsModalContentHeader">Unisex</h5>
          <ul>
            {kids.Unisex.map((w) => {
              return (w = <li>{w}</li>);
            })}{" "}
          </ul>
        </div>
      </div>
    </>
  );
};
export default Kids;