import React from "react";

import { Link } from "react-router-dom";

import "./UserItem.css";

const UserItem = (props) => {
  return (
    <Link to={`/${props.id}/articles`} style={{ textDecoration: "none" }}>
      <div className="userItem-card">
        <div className="userItem-content">
          <div className="userItem-avatar">
            <img src={props.image} alt="User" width="100%" />
          </div>
          <div className="userItem-info">
            <h2>Name: {props.name}</h2>
            <h3>{`${props.articleCount} ${
              props.articleCount === 1 ? "Article" : "Articles"
            }`}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default UserItem;
