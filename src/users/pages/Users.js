import React, { useEffect, useState } from "react";

import UserList from "../components/UserList";
import Card from "../../shared/components/Card";

const Users = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const [loadedUsers, setLoadedUsers] = useState(undefined);

  useEffect(() => {
    const sendRequest = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:5000/api/users");
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message);
        }
        setLoadedUsers(data.users);
        setLoading(false);
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };
    sendRequest();
  }, []);

  return (
    <div>
      {error ? <Card>Something went wrong, please try again.</Card> : null}
      {loading && <Card>LOADING...</Card>}
      {!loading && loadedUsers && <UserList users={loadedUsers} />}
    </div>
  );
};

export default Users;
