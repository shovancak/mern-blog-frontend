import React from "react";

import "./NavigationMenuButton.css";

const NavigationMenuButton = () => {
  const clickHandler = (e) => {
    e.preventDefault();
    console.log("CLICK");
  };

  return (
    <div className="nav-menu-icon" onClick={clickHandler}>
      <span className="nav-menu-btn"></span>
      <span className="nav-menu-btn"></span>
      <span className="nav-menu-btn"></span>
      <span className="nav-menu-btn"></span>
    </div>
  );
};

export default NavigationMenuButton;
