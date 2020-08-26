import React from "react";
import { Link } from "react-router-dom";

import "./UserItem.css";

const UserItem = (props) => {
  return (
    <li className="card">
      <div className="info-user">
        <Link to={`${props.id}/articles`}>
          <div className="avatar">
            <img
              className="image"
              src={props.image}
              width={100}
              height={100}
              alt="User avatar"
            />
          </div>
          <div className="info">
            <div className="name">Name: {props.name}</div>
            <div className="amount">{`${props.amount} ${
              props.amount === 1 ? "Article" : "Articles"
            }`}</div>
          </div>
        </Link>
      </div>
      <div className="info-article">
        <Link to={`/${props.id}/${props.articleId}`}>
          <div className="info-last-art">
            <div className="last-art">Last article</div>
            <div className="last-art-title">Title:</div>
            <div className="last-art-desc">Description:</div>
          </div>
        </Link>
      </div>
    </li>
  );
};

export default UserItem;
