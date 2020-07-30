import React from "react";
import ReactDOM from "react-dom";

const SideDrawer = (props) => {
  const drawerContent = <aside>{props.children}</aside>;

  return ReactDOM.createPortal(
    drawerContent,
    document.getElementById("drawer")
  );
};

export default SideDrawer;
