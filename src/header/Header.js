import React from "react";

import Title from "./Title";
import Navigation from "./Navigation";
import "./Header.css";
import NavigationMenuButton from "./NavigationMenuButton";

const Header = () => {
  return (
    <div className="header">
      <Title />
      <Navigation />
      <NavigationMenuButton />
    </div>
  );
};

export default Header;
