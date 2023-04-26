import React from "react";

const Accessories = ({ handleOpenA, handleCloseA }) => {
  const accessories = {
    AllAccessories: [
      "Hats & Scarves",
      "Bags & Totes",
      "Backpacks",
      "Luggage",
      "Blankets & Towels",
      "Other",
    ],
  };
  return (
    <>
      <div
        className="HeaderCompenent-AccessoriesModal"
        onMouseLeave={handleCloseA}
      >
        <div className="HeaderCompenent-AccessoriesModalContent">
          <h5 className="HeaderCompenent-AccessoriesModalContentHeader">
            All Accessories
          </h5>
          <ul>
            {accessories.AllAccessories.map((w) => {
              return (w = <li>{w}</li>);
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
export default Accessories;