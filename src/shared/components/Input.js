import React from "react";

import "./Input.css";

const Input = (props) => {
  const inputElement =
    props.element === "input" ? (
      <input id={props.id} type={props.type} placeholder={props.placeholder} />
    ) : (
      <textarea id={props.id} rows={props.rows || 3} />
    );

  return (
    <div className={`form-control`}>
      <label htmlFor={props.id}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default Input;
