import React, { useState } from "react";
import Backdrop from "../shared/components/Backdrop";
import TopDrawer from "./TopDrawer";
import NavigationLinksDrawer from "./NavigationLinksDrawer";

import "./NavigationMenuButton.css";

const NavigationMenuButton = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const openDrawerHandler = () => {
    setOpenDrawer(true);
  };

  const closeDrawerHandler = () => {
    setOpenDrawer(false);
  };

  return (
    <React.Fragment>
      {openDrawer && <Backdrop onClick={closeDrawerHandler} />}
      <TopDrawer show={openDrawer} onClick={closeDrawerHandler}>
        <NavigationLinksDrawer />
      </TopDrawer>
      <div className="nav-menu-icon" onClick={openDrawerHandler}>
        <span className="nav-menu-btn"></span>
        <span className="nav-menu-btn"></span>
        <span className="nav-menu-btn"></span>
        <span className="nav-menu-btn"></span>
      </div>
    </React.Fragment>
  );
};

export default NavigationMenuButton;
