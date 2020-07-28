import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import "./App.css";

function App() {
  //  / =>               List of users                     => Always reachable
  //  /:userId/articles  => List of articles for selected user   => Always reachable
  //  /auth           => Signup / Login Forms              => Only un-authenticated
  //  /articles/new      => Adding new article form              => Only authenticated
  //  /articles/:articleId  => Update selected article form         => Only authenticated

  return (
    <div className="app">
      <h1>APP WORKING</h1>
    </div>
  );
}

export default App;
