import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import "./TopDrawer.css";

const TopDrawer = (props) => {
  const drawerContent = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="slide-in-top"
      mountOnEnter
      unmountOnExit
    >
      <div className="top-drawer" onClick={props.onClick}>
        {props.children}
      </div>
    </CSSTransition>
  );

  return ReactDOM.createPortal(
    drawerContent,
    document.getElementById("top-drawer-hook")
  );
};

export default TopDrawer;
