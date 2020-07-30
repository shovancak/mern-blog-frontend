import React from "react";
import ReactDOM from "react-dom";

const SideDrawer = (props) => {
  const drawerContetnt = (
    <aside className="side-drawer">{props.children}</aside>
  );

  return ReactDOM.createPortal(
    drawerContetnt,
    document.getElementById("drawer")
  );
};

export default SideDrawer;
