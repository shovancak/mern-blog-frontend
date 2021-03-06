import React from "react";

import { NavLink } from "react-router-dom";

import "./NavigationLinksDrawer.css";

const NavigationLinksDrawer = () => {
  return (
    <ul className="drawer-links">
      <li>
        <NavLink to="/" exact>
          USERS
        </NavLink>
      </li>
      <li>
        <NavLink to="/:userId/articles">MY ARTICLES</NavLink>
      </li>
      <li>
        <NavLink to="/articles/new">NEW ARTICLE</NavLink>
      </li>
      <li>
        <NavLink to="/auth">SIGN UP</NavLink>
      </li>
    </ul>
  );
};

export default NavigationLinksDrawer;
