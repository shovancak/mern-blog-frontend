import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Header from "./Header/Header";
import Articles from "./Articles/Articles";
import NewArticle from "./Articles/NewArticle";
import Users from "./Users/Users";

import "./App.css";

function App() {
  //  / =>               List of users                     => Always reachable
  //  /users             => List of all users              => Always reachable
  //  /:userId/articles  => List of articles for selected user   => Always reachable
  //  /auth           => Signup / Login Forms              => Only un-authenticated
  //  /articles/new      => Adding new article form              => Only authenticated
  //  /articles/:articleId  => Update selected article form         => Only authenticated

  return (
    <div className="app">
      <Header />
      <h1>APP WORKING</h1>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Articles />
          </Route>
          <Route path="/users" exact>
            <Users />
          </Route>
          <Route path="/articles/new" exact>
            <NewArticle />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
