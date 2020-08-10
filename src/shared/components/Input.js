import React, { useReducer } from "react";

import "./Input.css";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: true,
      };
    default:
      return state;
  }
};

const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false,
  });

  const inputChangeHandler = (event) => {
    console.log(inputState);
    dispatch({ type: "CHANGE", val: event.target.value });
  };
  const inputElement =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={inputChangeHandler}
        value={inputState.value}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        onChange={inputChangeHandler}
        value={inputState.value}
      />
    );

  return (
    <div
      className={`form-control ${
        !inputState.isValid && "form-control-invalid"
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      {inputElement}
      {!inputState.isValid && <p>{props.errorText}</p>}
    </div>
  );
};

export default Input;
