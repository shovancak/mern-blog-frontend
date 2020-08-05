import React from "react";
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
import Header from "./shared/components/header/Header";
import SingleArtilce from "./articles/pages/SingleArticle";

const App = () => {
  return (
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
        <Route path="/articles/update/:articleId">
          <UpdateArticle />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Route path="/articles/:articleId" exact>
          <SingleArtilce />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
