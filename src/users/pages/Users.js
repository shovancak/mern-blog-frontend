import React, { useEffect, useState } from "react";

import UserList from "../components/UserList";
import Card from "../../shared/components/Card";
import { useHttpClient } from "../../shared/utilities/http-hook";

const Users = () => {
  const { loading, error, request, clearError } = useHttpClient();
  const [loadedUsers, setLoadedUsers] = useState(undefined);

  useEffect(() => {
    const sendRequest = async () => {
      try {
        const data = await request("http://localhost:5000/api/users");
        setLoadedUsers(data.users);
      } catch (err) {}
    };
    sendRequest();
  }, [request]);

  return (
    <div>
      {error ? <Card>Something went wrong, please try again.</Card> : null}
      {loading && <Card>LOADING...</Card>}
      {!loading && loadedUsers && <UserList users={loadedUsers} />}
    </div>
  );
};

export default Users;
