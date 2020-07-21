import React from "react";
import UsersList from "../components/UsersList";

export default function Users() {
  const DUMMY_USERS = [
    {
      id: "u1",
      image: "https://i.imgur.com/DcylgJM.jpg",
      name: "Samuel",
      articles: 3,
    },
  ];

  return (
    <div>
      <UsersList users={DUMMY_USERS} />
    </div>
  );
}
