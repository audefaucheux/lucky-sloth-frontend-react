import React from "react";
import funStopsLogo from "../../images/game/when-the-fun-stops-stop.jpg";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <footer id="stop-logo">
      <img
        src={funStopsLogo}
        alt="When The Fun Stops, Stop"
        className="center"
      />
    </footer>
  );
};

export default Footer;
