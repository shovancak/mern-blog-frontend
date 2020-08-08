import React from "react";

import UserItem from "./UserItem";
import Card from "../../shared/components/Card";

import "./UserList.css";

const UserList = (props) => {
  if (props.users.length === 0) {
    return (
      <Card>
        <h2>There are no users yet.</h2>
      </Card>
    );
  }

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
