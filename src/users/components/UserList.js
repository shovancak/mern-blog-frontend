import React from "react";

import UserItem from "./UserItem";

import "./UserList.css";

const UserList = (props) => {
  return (
    <div>
      <ul>
        {props.users.map((user) => (
          <UserItem
            key={user.id}
            id={user.id}
            name={user.name}
            image={user.image}
            articleId={user.articleId}
            amount={user.amount}
          />
        ))}
      </ul>
    </div>
  );
};

export default UserList;
