import React from "react";
import { Link } from "react-router-dom";

import "./UserItem.css";

const UserItem = (props) => {
  return (
    <li className="card">
      <div className="info-user">
        <Link to={`${props.id}/articles`}>
          <div>AVATAR</div>
          <div>
            <div>Name: {props.name}</div>
            <div>{`${props.amount} ${
              props.amount === 1 ? "Article" : "Articles"
            }`}</div>
          </div>
        </Link>
      </div>
      <div className="info-article">
        <Link to={`/${props.id}/${props.articleId}`}>
          <div>TITLE</div>
          <div>DESCRIPTION</div>
        </Link>
      </div>
    </li>
  );
};

export default UserItem;
