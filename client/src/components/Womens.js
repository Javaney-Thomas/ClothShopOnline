import React from "react";
const Womens = ({ handleOpenW, handleCloseW }) => {
  const Women = {
    Allwomen: "All Women",
    Tshirts: [
      "Tank Tops",
      "V-Neck",
      "Long Sleeves",
      "Crewneck",
      "Short Sleeves",
      "Raglans",
      "Button Down",
      "Polos",
      "Scoop Neck",
    ],
    workout: [
      "Golf",
      "Tanks",
      "Tees",
      "Shorts",
      "Sports Bras",
      "Leggings & Pants",
      "Sweatshirts & Hoodies",
    ],
    pantsAndLeggings: ["Joggers", "Leggings", "Shorts"],
    sweatshirtsAndHoodies: [
      "Hoodie",
      "Crewneck",
      "Full-Zips",
      "Quarter-Zips",
      "Sweaters",
    ],
    coatsAndJackets: ["Fleece", "Waterproof", "Puffers", "Vests", "Other"],
    work: ["Polos", "Button Down", "Aprons", "Dresses"],
    sleepwareAndLounge: [
      "Sweatshirts & Hoodies",
      "Lounge Tops",
      "Lounge Buttoms",
      "Sleep Buttoms",
    ],
    juniors: "Juniors",
  };
  return (
    <>
      <div className="HeaderCompenent-WomenModal" onMouseLeave={handleCloseW}>
        <div className="HeaderCompenent-WomenModalContent">
          <h5 className="HeaderCompenent-WomenModalContentHeader">
            {Women.Allwomen}
          </h5>
        </div>
        <div className="HeaderCompenent-WomenModalContent">
          <h5 className="HeaderCompenent-WomenModalContentHeader">T-Shirts</h5>
          <ul>
            {Women.Tshirts.map((w) => {
              return (w = <li>{w}</li>);
            })}
          </ul>
        </div>
        <div className="HeaderCompenent-WomenModalContent">
          <h5 className="HeaderCompenent-WomenModalContentHeader">Workout</h5>
          <ul>
            {Women.workout.map((w) => {
              return (w = <li>{w}</li>);
            })}
          </ul>
        </div>
        <div className="HeaderCompenent-WomenModalContent">
          <h5 className="HeaderCompenent-WomenModalContentHeader">
            Pants & Leggings
          </h5>
          <ul>
            {Women.pantsAndLeggings.map((w) => {
              return (w = <li>{w}</li>);
            })}{" "}
          </ul>
        </div>
        <div className="HeaderCompenent-WomenModalContent">
          <h5 className="HeaderCompenent-WomenModalContentHeader">
            Sweatshirts & Hoodies
          </h5>
          <ul>
            {Women.sweatshirtsAndHoodies.map((w) => {
              return (w = <li>{w}</li>);
            })}{" "}
          </ul>
        </div>
        <div className="HeaderCompenent-WomenModalContent">
          <h5 className="HeaderCompenent-WomenModalContentHeader">
            Coats & Jackets
          </h5>
          <ul>
            {Women.coatsAndJackets.map((w) => {
              return (w = <li>{w}</li>);
            })}{" "}
          </ul>
        </div>
        <div className="HeaderCompenent-WomenModalContent">
          <h5 className="HeaderCompenent-WomenModalContentHeader">Work</h5>
          <ul>
            {Women.work.map((w) => {
              return (w = <li>{w}</li>);
            })}{" "}
          </ul>
        </div>
        <div className="HeaderCompenent-WomenModalContent">
          <h5 className="HeaderCompenent-WomenModalContentHeader">
            Sleepware & Lounge
          </h5>
          <ul>
            {Women.sleepwareAndLounge.map((w) => {
              return (w = <li>{w}</li>);
            })}{" "}
          </ul>
        </div>
        <div className="HeaderCompenent-WomenModalContent">
          <h5 className="HeaderCompenent-WomenModalContentHeader">
            {Women.juniors}
          </h5>
        </div>
      </div>
    </>
  );
};
export default Womens;