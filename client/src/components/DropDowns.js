import React, { useState } from "react";
import Mens from "./Mens";
import Womens from "./Womens";
import Kids from "./Kids";
import Accessories from "./Accessories";
import Brands from "./Brands";
import Closeout from "./Closeout";
import "../componentsCSS/dropdowns.css";

const DropDowns = () => {
  const [modal, setModal] = useState(false);
  const [modalW, setModalW] = useState(false);
  const [modalK, setModalK] = useState(false);
  const [modalA, setModalA] = useState(false);
  const [modalB, setModalB] = useState(false);
  const [modalC, setModalC] = useState(false);
  const handleClose = () => setModal(false);
  const handleOpen = () => {
    handleCloseAll();
    setModal(true);
  };
  const handleCloseW = () => setModalW(false);
  const handleOpenW = () => {
    handleCloseAll();
    setModalW(true);
  };
  const handleCloseK = () => setModalK(false);
  const handleOpenK = () => {
    handleCloseAll();
    setModalK(true);
  };
  const handleCloseA = () => setModalA(false);
  const handleOpenA = () => {
    handleCloseAll();
    setModalA(true);
  };
  const handleCloseB = () => setModalB(false);
  const handleOpenB = () => {
    handleCloseAll();
    setModalB(true);
  };
  const handleCloseC = () => setModalC(false);
  const handleOpenC = () => {
    handleCloseAll();
    setModalC(true);
  };
  const handleCloseAll = () => {
    setModal(false);
    setModalW(false);
    setModalK(false);
    setModalA(false);
    setModalB(false);
    setModalC(false);
  };
  return (
    <>
      <div>
        <button
          className="HeaderCompenent-Men"
          onClick={handleOpen}
          onMouseEnter={handleOpen}
        >
          Men
        </button>
        {modal ? <Mens handleClose={handleClose} /> : null}
      </div>
      <div>
        <button
          className="HeaderCompenent-Women"
          onClick={handleOpenW}
          onMouseEnter={handleOpenW}
        >
          Women
        </button>
        {modalW ? <Womens handleCloseW={handleCloseW} /> : null}
      </div>
      <div>
        <button
          className="HeaderCompenent-Kids"
          onClick={handleOpenK}
          onMouseEnter={handleOpenK}
        >
          Kids
        </button>
        {modalK ? <Kids handleCloseK={handleCloseK} /> : null}
      </div>
      <div>
        <button
          className="HeaderCompenent-Accessories"
          onClick={handleOpenA}
          onMouseEnter={handleOpenA}
        >
          Accessories
        </button>
        {modalA ? <Accessories handleCloseA={handleCloseA} /> : null}
      </div>
      <div>
        <button className="HeaderCompenent-Colors">Colors</button>
      </div>
      <div>
        <button
          className="HeaderCompenent-Brands"
          onClick={handleOpenB}
          onMouseEnter={handleOpenB}
        >
          Brands
        </button>
        {modalB ? <Brands handleCloseB={handleCloseB} /> : null}
      </div>
      <div>
        <button
          className="HeaderCompenent-Closeout"
          onClick={handleOpenC}
          onMouseEnter={handleOpenC}
        >
          Closeout
        </button>
        {modalC ? <Closeout handleCloseC={handleCloseC} /> : null}
      </div>
      <div>
        <button className="HeaderCompenent-FaceCovers">Face Covers</button>
      </div>
    </>
  );
};
export default DropDowns;