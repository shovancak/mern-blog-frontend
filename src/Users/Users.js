import React from "react";

import UserList from "./UserList";

export default function Users() {
  const DUMMY_USERS = [
    {
      id: "u1",
      name: "Samuel",
      image: "https://i.imgur.com/DcylgJM.jpg",
      articleCount: 2,
    },
    {
      id: "u2",
      name: "Max",
      image: "https://i.imgur.com/DcylgJM.jpg",
      articleCount: 1,
    },
    {
      id: "u3",
      name: "Oliver",
      image: "https://i.imgur.com/DcylgJM.jpg",
      articleCount: 4,
    },
    {
      id: "u4",
      name: "Andrei",
      image: "https://i.imgur.com/DcylgJM.jpg",
      articleCount: 7,
    },
    {
      id: "u5",
      name: "Yhua",
      image: "https://i.imgur.com/DcylgJM.jpg",
      articleCount: 3,
    },
  ];

  return <UserList items={DUMMY_USERS} />;
}
