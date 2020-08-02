import React from "react";

import Title from "./Title";
import Navigation from "./Navigation";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Title />
      <Navigation />
    </div>
  );
};

export default Header;
