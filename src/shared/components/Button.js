import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  if (props.href) {
    return (
      <a href={props.href} className={props.className}>
        {props.children}
      </a>
    );
  }

  if (props.to) {
    return (
      <Link to={props.to} exact={props.exact} className={props.className}>
        {props.children}
      </Link>
    );
  }
  return (
    <button
      className={props.className}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
