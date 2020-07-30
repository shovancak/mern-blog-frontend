import React from "react";
import Header from "./Header";
import Title from "./Title";
import { Link } from "react-router-dom";

import "./Navigation.css";

const Navigation = (props) => {
  return (
    <Header>
      <button className="nav-menu-btn">
        <span />
        <span />
        <span />
      </button>
      <Link to="/">
        <Title />
      </Link>
      <nav>...</nav>
    </Header>
  );
};

export default Navigation;
