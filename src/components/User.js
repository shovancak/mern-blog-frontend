import React from "react";
import Card from "@material-ui/core/Card";
import { CardContent, Avatar, Typography, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

import "./User.css";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
}));

export default function User(props) {
  const classes = useStyles();

  const clickHandler = (event) => {
    event.preventDefault();
    event.target.value = "Click";
    console.log(event.target.value);
  };

  return (
    <div className="center">
      <Link to={`/${props.id}/places`} style={{ textDecoration: "none" }}>
        <Card
          variant="outlined"
          id="userCard"
          className="user-size"
          onClick={clickHandler}
        >
          <CardContent className="user-center">
            <Avatar src={props.image} className={`${classes.large}`} />
            <div>
              <Typography variant="h5" className="user-info">
                {props.name}
              </Typography>
              <Typography variant="h6" className="user-info">
                {props.articlesCount}{" "}
                {props.articlesCount === 1 ? "Article" : "Articles"}
              </Typography>
            </div>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}
