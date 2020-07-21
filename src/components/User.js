import React from "react";

import "./User.css";

export default function User(props) {
  return (
    <div className="center">
      <div>
        <img src={props.image} alt="User" width="10%" />
      </div>
      <div>
        <h2>Name: {props.name}</h2>
        <h3>
          {props.articlesCount}{" "}
          {props.articlesCount === 1 ? "Article" : "Articles"}
        </h3>
      </div>
    </div>
  );
}
