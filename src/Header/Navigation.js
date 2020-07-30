import React from "react";

import Header from "./Header";
import Title from "./Title";
import { Link } from "react-router-dom";
import NavigationLinks from "./NavigationLinks";
import SideDrawer from "./SideDrawer";
import "./Navigation.css";

const Navigation = (props) => {
  return (
    <React.Fragment>
      <SideDrawer>
        <nav>
          <NavigationLinks />
        </nav>
      </SideDrawer>
      <Header>
        <button className="nav-menu-btn">
          <span />
          <span />
          <span />
        </button>
        <Link to="/">
          <Title />
        </Link>
        <nav>
          <NavigationLinks />
        </nav>
      </Header>
    </React.Fragment>
  );
};

export default Navigation;
