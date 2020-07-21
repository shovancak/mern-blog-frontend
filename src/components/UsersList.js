import React from "react";

import User from "./User";

import "./UsersList.css";

export default function UsersList(props) {
  // Props passed from parent element => Users

  // If array of users is empty
  if (props.users.length === 0) {
    return (
      <div className="center">
        <h2>No Users found.</h2>
      </div>
    );
  }

  // Array of users is not empty => rendering list of users
  return (
    <ul>
      {props.users.map((user) => {
        return (
          <User
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            articlesCount={user.articles}
          />
        );
      })}
    </ul>
  );
}
