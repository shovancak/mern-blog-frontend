import React from "react";

import "./Card.css";

const Card = (props) => {
  return <div className="shared-card">{props.children}</div>;
};

export default Card;
