import React from "react";

import "./UserItem.css";

const UserItem = (props) => {
  return (
    <div className="card">
      CARD
      <div>
        CONTENT
        <div>AVATAR</div>
        <div>
          <div>NAME: {props.name}</div>
          <div>{`${props.amount} ${
            props.amount === 1 ? "Article" : "Articles"
          }`}</div>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
