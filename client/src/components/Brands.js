import React from "react";
const Brands = ({ handleOpenB, handleCloseB }) => {
  const brands = {
    AllBrands: [
      "47 Brand",
      "A4",
      "adidas",
      "Alleson Athletic",
      "Alpine Fleece",
      "ALSTYLE",
      "American Apparel",
      "Anvil",
      "Atlantis Headwear",
      "Augusta Sportswear",
      "Badger",
      "Bayside",
      "BELLA + CANVAS",
      "Boxercraft",
      "Burnside",
      "C2 Sport",
      "Cap America",
      "Carmel Towel Company",
      "Champion",
      "Classic Caps",
      "Code Five",
      "Colortone",
      "Comfort Colors",
      "ComfortWash",
      "Dickies Medical",
      "DRI DUCK",
      "Dunbrooke",
      "Dyenomite",
      "Flexfit",
      "Fruit of the Loom",
      "Gaiter King",
      "Gildan",
      "Hanes",
      "Helen Jon",
      "Holloway",
      "Imperial",
      "In Your Face",
      "Independent Trading Co.",
      "Infinity Her",
      "IZOD",
    ],
  };
  return (
    <>
      <div className="HeaderCompenent-BrandsModal" onMouseLeave={handleCloseB}>
        <div className="HeaderCompenent-BrandsModalContent">
          <h5 className="HeaderCompenent-BrandsModalContentHeader">
            All Brands
          </h5>
          <ul>
            {brands.AllBrands.map((w) => {
              return (w = <li>{w}</li>);
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
export default Brands;