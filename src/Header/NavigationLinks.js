import React from "react";
import { NavLink } from "react-router-dom";

import "./NavigationLinks.css";

const NavigationLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          ALL USERS
        </NavLink>
      </li>
      <li>
        <NavLink to="/u1/articles">MY ARTICLES</NavLink>
      </li>
      <li>
        <NavLink to="/articles/new">NEW ARTICLE</NavLink>
      </li>
      <li>
        <NavLink to="/auth">AUTHENTICATION</NavLink>
      </li>
    </ul>
  );
};

export default NavigationLinks;
