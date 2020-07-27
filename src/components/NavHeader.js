import React from "react";

import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import "./NavHeader.css";

export default function NavHeader() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar className="menu">
          <div>
            <Typography variant="h4" className="title">
              <Link to="/" style={{ color: "black", textDecoration: "none" }}>
                BLOGGIE
              </Link>
            </Typography>
          </div>
          <div>
            <Button>
              <Link to="/" style={{ color: "black", textDecoration: "none" }}>
                ALL USERS
              </Link>
            </Button>
            <Button>
              <Link
                to="/:userId/articles"
                style={{ color: "black", textDecoration: "none" }}
              >
                MY ARTICLES
              </Link>
            </Button>
            <Button>
              <Link
                to="/articles/new"
                style={{ color: "black", textDecoration: "none" }}
              >
                NEW ARTICLE
              </Link>
            </Button>
            <Button>
              <Link
                to="/auth"
                style={{ color: "black", textDecoration: "none" }}
              >
                AUTH
              </Link>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
