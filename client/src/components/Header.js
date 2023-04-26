import React from "react";
import { useState, useEffect } from "react";
import DropDowns from "./DropDowns";
import SearchBar from "./SearchBar";
import Icons from "./Icons";
import "../componentsCSS/dropdowns.css";
const Header = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [playMessage, setPlayMessage] = useState(true);
  const messages = [
    "BULK DISCOUNTS ON ORDERS OVER $80",
    "Now Offering: FREE 100 DAY RETURNS",
    "No order minimums",
    "Free shipping on orders over $59",
    "Order by 11AM PT/ 2PM ET for same day processing",
  ];
  const changeMessageUp = () => {
    setCurrentMessage(
      currentMessage < messages.length ? currentMessage + 1 : 0
    );
  };
  const changeMessageDown = () => {
    setCurrentMessage(
      currentMessage > 0 ? currentMessage - 1 : messages.length - 1
    );
  };
  const rotateMessages = () => {
    if (playMessage) {
      setTimeout(() => {
        changeMessageUp();
        rotateMessages();
      }, 4000);
    }
  };
  const playTheMessage = () => {
    setPlayMessage(true);
    rotateMessages();
  };

  const pauseTheMessage = () => {
    setPlayMessage(false);
  };
  useEffect(() => {
    rotateMessages();
  }, []);
  return (
    <div className="header-all">
      <div className="HeaderComponent-messages">
        {playMessage ? (
          <img
            className="HeaderComponent-messages-PlayPause"
            src="../images/pause-icon.png"
            alt="Pause Button"
            onClick={pauseTheMessage}
          />
        ) : (
          <img
            className="HeaderComponent-messages-PlayPause"
            src="../images/play-icon.png"
            alt="Play Button"
            onClick={playTheMessage}
          />
        )}
        <img
          className="HeaderComponent-messages-LeftArrow"
          src="../images/arrow-left-white.png"
          alt="Message Back"
          onClick={changeMessageDown}
        />
        <h4 className="HeaderComponent-messages-Text">
          {messages[currentMessage]}
        </h4>
        <img
          className="HeaderComponent-messages-RightArrow"
          src="../images/arrow-right-white.png"
          alt="Message Forward"
          onClick={changeMessageUp}
        />
      </div>
      <div className="HeadComponent-Accesibility">
        <h4 className="HeaderComponent-messages-AccesibilityText">
          Enable Accesibility
        </h4>
      </div>
      <div className="HeaderComponent-container">
        <div className="HeaderComponent-Logo">
          <img src="../images/Site_Logo.png" />
        </div>
        <div className="HeaderComponent-SearchBar-Spacer">
          <SearchBar />
          <Icons />
        </div>
      </div>
      <div className="HeaderComponent-Menu">
        <DropDowns />
      </div>
    </div>
  );
};
export default Header;