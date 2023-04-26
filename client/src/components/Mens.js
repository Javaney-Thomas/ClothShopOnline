import React from "react";
const Mens = ({ modal, handleOpen, handleClose }) => {
  const Men = {
    Allmen: "All Men",
    Tshirts: [
      "Raglans",
      "Pocket Tees",
      "V-Neck",
      "Crewneck",
      "Short Sleeves",
      "Long Sleeves",
      "Tank Tops",
    ],
    sweatshirtsAndHoodies: [
      "Quarter-Zips",
      "Hoodie",
      "Full-Zips",
      "Crewneck",
      "Sweaters",
    ],
    workOutAndGym: [
      "Tanks",
      "Shorts",
      "Sweatshirts & Hoodies",
      "Golf",
      "Tees",
      "Joggers",
      "Swim",
    ],
    pants: ["Sweatpants", "Joggers", "Shorts"],
    coatsAndJackets: [
      "Fleece",
      "Waterproof",
      "Puffers",
      "Vests",
      "Tees",
      "Other",
    ],
    shirts: ["Polos"],
    work: ["Safety", "Aprons"],
    loungeAndPajamas: ["Pajama Bottoms", "Boxers", "Sweatshirts"],
  };

  return (
    <>
      <div className="HeaderCompenent-MenModal" onMouseLeave={handleClose}>
        <div className="HeaderCompenent-MenModalContent">
          <h5 className="HeaderCompenent-MenModalContentHeader">
            {Men.Allmen}
          </h5>
        </div>
        <div className="HeaderCompenent-MenModalContent">
          <h5 className="HeaderCompenent-MenModalContentHeader">T-Shirts</h5>
          <ul>
            {Men.Tshirts.map((key) => {
              return (key = <li>{key}</li>);
            })}
          </ul>
        </div>
        <div className="HeaderCompenent-MenModalContent">
          <h5 className="HeaderCompenent-MenModalContentHeader">
            Sweatshirts & Hoodies
          </h5>
          <ul>
            {Men.sweatshirtsAndHoodies.map((key) => {
              return (key = <li>{key}</li>);
            })}
          </ul>
        </div>
        <div className="HeaderCompenent-MenModalContent">
          <h5 className="HeaderCompenent-MenModalContentHeader">
            Workout & Gym
          </h5>
          <ul>
            {Men.workOutAndGym.map((key) => {
              return (key = <li>{key}</li>);
            })}{" "}
          </ul>
        </div>
        <div className="HeaderCompenent-MenModalContent">
          <h5 className="HeaderCompenent-MenModalContentHeader">Pants</h5>
          <ul>
            {Men.pants.map((key) => {
              return (key = <li>{key}</li>);
            })}{" "}
          </ul>
        </div>
        <div className="HeaderCompenent-MenModalContent">
          <h5 className="HeaderCompenent-MenModalContentHeader">
            Coats & Jackets
          </h5>
          <ul>
            {Men.coatsAndJackets.map((key) => {
              return (key = <li>{key}</li>);
            })}{" "}
          </ul>
        </div>
        <div className="HeaderCompenent-MenModalContent">
          <h5 className="HeaderCompenent-MenModalContentHeader">Shirts</h5>
          <ul>
            {Men.shirts.map((key) => {
              return (key = <li>{key}</li>);
            })}{" "}
          </ul>
        </div>
        <div className="HeaderCompenent-MenModalContent">
          <h5 className="HeaderCompenent-MenModalContentHeader">Work</h5>
          <ul>
            {Men.work.map((key) => {
              return (key = <li>{key}</li>);
            })}{" "}
          </ul>
        </div>
        <div className="HeaderCompenent-MenModalContent">
          <h5 className="HeaderCompenent-MenModalContentHeader">
            Lounge & Pajamas
          </h5>
          <ul>
            {Men.loungeAndPajamas.map((key) => {
              return (key = <li>{key}</li>);
            })}{" "}
          </ul>
        </div>
      </div>
    </>
  );
};
export default Mens;