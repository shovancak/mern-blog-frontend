import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Users from "./pages/Users";
import UserArticles from "./pages/UserArticles";
import UpdateArticle from "./pages/UpdateArticle";
import NewArticle from "./pages/NewArticle";
import Auth from "./pages/Auth";

function App() {
  //  / =>               List of users                     => Always reachable
  //  /:userId/articles  => List of articles for selected user   => Always reachable
  //  /auth           => Signup / Login Forms              => Only un-authenticated
  //  /articles/new      => Adding new article form              => Only authenticated
  //  /articles/:articleId  => Update selected article form         => Only authenticated

  let routes = (
    <Switch>
      <Route path="/" exact>
        <Users />
      </Route>
      <Route path="/:userId/articles" exact>
        <UserArticles />
      </Route>
      <Route path="/articles/new" exact>
        <NewArticle />
      </Route>
      <Route path="/articles/:articleId" exact>
        <UpdateArticle />
      </Route>
      <Route path="/auth">
        <Auth />
      </Route>
      <Redirect to="/" />
    </Switch>
  );

  return <Router>{routes}</Router>;
}

export default App;
