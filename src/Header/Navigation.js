import React, { useState } from "react";

import Header from "./Header";
import Title from "./Title";
import { Link } from "react-router-dom";
import NavigationLinks from "./NavigationLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../Backdrop";
import "./Navigation.css";

const Navigation = (props) => {
  const [drawerOpened, setDrawerOpened] = useState(false);

  const drawerOpenHandler = () => {
    setDrawerOpened(true);
  };

  const drawerCloseHandler = () => {
    setDrawerOpened(false);
  };

  return (
    <React.Fragment>
      {drawerOpened ? <Backdrop onClick={drawerCloseHandler} /> : null}
      {drawerOpened ? (
        <SideDrawer>
          <nav className="drawer-nav">
            <NavigationLinks />
          </nav>
        </SideDrawer>
      ) : null}
      <Header>
        <button className="nav-menu-btn" onClick={drawerOpenHandler}>
          <span />
          <span />
          <span />
        </button>
        <Link to="/">
          <Title />
        </Link>
        <nav className="noDrawer">
          <NavigationLinks />
        </nav>
      </Header>
    </React.Fragment>
  );
};

export default Navigation;
