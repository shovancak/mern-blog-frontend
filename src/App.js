import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Users from "./pages/Users";
import UserBlogs from "./pages/UserBlogs";
import UpdateBlog from "./pages/UpdateBlog";
import NewBlog from "./pages/NewBlog";
import Auth from "./pages/Auth";
import "./App.css";

function App() {
  //  / =>               List of users                     => Always reachable
  //  /:userId/blogs  => List of blogs for selected user   => Always reachable
  //  /auth           => Signup / Login Forms              => Only un-authenticated
  //  /blogs/new      => Adding new blog form              => Only authenticated
  //  /blogs/:blogId  => Update selected blog form         => Only authenticated

  let routes = (
    <Switch>
      <Route path="/" exact>
        <Users />
      </Route>
      <Route path="/:userId/blogs" exact>
        <UserBlogs />
      </Route>
      <Route path="/blogs/new" exact>
        <NewBlog />
      </Route>
      <Route path="/blogs/:blogId" exact>
        <UpdateBlog />
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
