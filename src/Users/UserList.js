import React from "react";

import UserItem from "./UserItem";

import "./UserList.css";

const UserList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2 className="no-users"> No users found.</h2>
      </div>
    );
  }

  return (
    <div className="userList">
      {props.items.map((user) => {
        return (
          <UserItem
            key={user.id}
            id={user.id}
            name={user.name}
            image={user.image}
            articleCount={user.articleCount}
          />
        );
      })}
    </div>
  );
};

export default UserList;
