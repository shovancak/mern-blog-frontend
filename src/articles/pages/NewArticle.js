import React, { useCallback, useReducer } from "react";

import Input from "../../shared/components/Input";
import Button from "../../shared/components/Button";
import { VALIDATOR_REQUIRE } from "../../shared/utilities/validators";

import "./NewArticle.css";

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isValid: formIsValid,
      };
    default:
      return state;
  }
};

const NewArticle = () => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    isValid: false,
  });

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: "INPUT_CHANGE",
      value: value,
      isValid: isValid,
      inputId: id,
    });
  }, []);

  return (
    <form className="article-form center">
      <div className="article-form-header">CREATE NEW ARTILCE</div>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a title."
        onInput={inputHandler}
      />
      <Input
        id="description"
        label="Description"
        rows="4"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a description."
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        CREATE ARTICLE
      </Button>
    </form>
  );
};

export default NewArticle;
