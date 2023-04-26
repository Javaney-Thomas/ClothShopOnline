import React from "react";
const Closeout = ({ handleOpenC, handleCloseC }) => {
  const closeout = {
    AllCloseout: ["Men", "Women", "Kids"],
  };
  return (
    <>
      <div
        className="HeaderCompenent-CloseoutModal"
        onMouseLeave={handleCloseC}
      >
        <div className="HeaderCompenent-CloseoutModalContent">
          <h5 className="HeaderCompenent-CloseoutModalContentHeader">
            All Closeout
          </h5>
          <ul>
            {closeout.AllCloseout.map((w) => {
              return (w = <li>{w}</li>);
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
export default Closeout;