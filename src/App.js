import React, { useState, useCallback } from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Users from "./users/pages/Users";
import UsersArticles from "./articles/pages/UsersArticles";
import NewArticle from "./articles/pages/NewArticle";
import UpdateArticle from "./articles/pages/UpdateArticle";
import Auth from "./auth/pages/Auth";
import Header from "./header/Header";
import SingleArtilce from "./articles/pages/SingleArticle";
import { AuthContext } from "./shared/utilities/contex";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userId, setUserId] = useState(false);

  const login = useCallback((uid) => {
    setLoggedIn(true);
    setUserId(uid);
  }, []);

  const logout = useCallback(() => {
    setLoggedIn(false);
    setUserId(null);
  }, []);

  let pages;

  if (!loggedIn) {
    pages = (
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userId/articles" exact>
          <UsersArticles />
        </Route>
        <Route path="/articles/:articleId">
          <SingleArtilce />
        </Route>
        <Route path="/auth" exact>
          <Auth />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    );
  } else {
    pages = (
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userId/articles" exact>
          <UsersArticles />
        </Route>
        <Route path="/articles/new" exact>
          <NewArticle />
        </Route>
        <Route path="/articles/update/:articleId" exact>
          <UpdateArticle />
        </Route>
        <Route path="/auth" exact>
          <Auth />
        </Route>
        <Route path="/articles/:articleId">
          <SingleArtilce />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        loggedIn: loggedIn,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <Router>
        <Header />
        {pages}
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
