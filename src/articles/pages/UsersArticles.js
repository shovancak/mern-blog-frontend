import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { useHttpClient } from "../../shared/utilities/http-hook";
import { AuthContext } from "../../shared/utilities/contex";

import ArticleList from "./components/ArticleList";
import Card from "../../shared/components/Card";

import "./UsersArticles.css";

const UsersArticles = () => {
  const auth = useContext(AuthContext);
  const { loading, error, request, clearError } = useHttpClient();
  const [usersArticles, setUsersArticles] = useState(undefined);

  const userId = useParams().userId;

  console.log(auth);
  useEffect(() => {
    const sendRequest = async () => {
      try {
        const data = await request(
          `http://localhost:5000/api/articles/user/${userId}`
        );
        setUsersArticles(data.articles);
      } catch (err) {}
    };
    sendRequest();
  }, [request, userId]);

  return (
    <div className="articles">
      {!loading && usersArticles && <ArticleList items={usersArticles} />}
    </div>
  );
};

export default UsersArticles;
