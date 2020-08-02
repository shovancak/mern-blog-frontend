import React from "react";

import UserList from "../components/UserList";

const Users = () => {
  const DUMMY_USERS = [
    {
      id: "u1",
      name: "Samuel",
      image: "https://i.imgur.com/DcylgJM.jpg",
      articleId: 11,
      amount: 2,
    },
    {
      id: "u2",
      name: "Max",
      image: "https://i.imgur.com/DcylgJM.jpg",
      articleId: 22,
      amount: 1,
    },
    {
      id: "u3",
      name: "Oliver",
      image: "https://i.imgur.com/DcylgJM.jpg",
      articleId: 33,
      amount: 1,
    },
    {
      id: "u4",
      name: "Andrei",
      image: "https://i.imgur.com/DcylgJM.jpg",
      articleId: 44,
      amount: 3,
    },
    {
      id: "u5",
      name: "Yhua",
      image: "https://i.imgur.com/DcylgJM.jpg",
      articleId: 55,
      amount: 4,
    },
  ];

  return (
    <div>
      <UserList users={DUMMY_USERS} />
    </div>
  );
};

export default Users;
