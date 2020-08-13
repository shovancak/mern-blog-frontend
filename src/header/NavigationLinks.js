import React, { useContext } from "react";

import { NavLink } from "react-router-dom";
import { AuthContext } from "../shared/utilities/contex";

import "./NavigationLinks.css";

const NavigationLinks = () => {
  const auth = useContext(AuthContext);

  return (
    <ul className="links-buttons">
      <li>
        <NavLink to="/" exact>
          USERS
        </NavLink>
      </li>
      {auth.loggedIn ? (
        <li>
          <NavLink to="/:userId/articles">MY ARTICLES</NavLink>
        </li>
      ) : null}
      {auth.loggedIn ? (
        <li>
          <NavLink to="/articles/new">NEW ARTICLE</NavLink>
        </li>
      ) : null}
      {!auth.loggedIn ? (
        <li>
          <NavLink to="/auth">SIGNUP/LOGIN</NavLink>
        </li>
      ) : (
        <li>
          <NavLink to="/auth" onClick={auth.logout}>
            LOGOUT
          </NavLink>
        </li>
      )}
    </ul>
  );
};

export default NavigationLinks;
