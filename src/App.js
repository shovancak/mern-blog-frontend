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

  const login = useCallback(() => {
    setLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setLoggedIn(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{ loggedIn: loggedIn, login: login, logout: logout }}
    >
      <Router>
        <Header />
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
          <Route path="/articles/:articleId" exact>
            <SingleArtilce />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
