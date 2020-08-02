import React from "react";

import UserList from "../components/UserList";

const Users = () => {
  const DUMMY_USERS = [
    {
      id: "u1",
      name: "Samuel",
      image: "https://i.imgur.com/DcylgJM.jpg",
      amount: 2,
    },
    {
      id: "u2",
      name: "Max",
      image: "https://i.imgur.com/DcylgJM.jpg",
      amount: 1,
    },
    {
      id: "u3",
      name: "Oliver",
      image: "https://i.imgur.com/DcylgJM.jpg",
      amount: 1,
    },
    {
      id: "u4",
      name: "Andrei",
      image: "https://i.imgur.com/DcylgJM.jpg",
      amount: 3,
    },
    {
      id: "u5",
      name: "Yhua",
      image: "https://i.imgur.com/DcylgJM.jpg",
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
