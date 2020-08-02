import React from "react";

import "./UserItem.css";

const UserItem = (props) => {
  return (
    <div className="card">
      CARD
      <div className="info-user">
        INFO
        <div>AVATAR</div>
        <div>
          <div>Name: {props.name}</div>
          <div>{`${props.amount} ${
            props.amount === 1 ? "Article" : "Articles"
          }`}</div>
        </div>
      </div>
      <div className="info-article">
        LAST ARTICLE
        <div>TITLE</div>
        <div>DESCRIPTION</div>
      </div>
    </div>
  );
};

export default UserItem;
