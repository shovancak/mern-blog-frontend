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

  const articleSubmithandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  return (
    <form className="article-form center" onSubmit={articleSubmithandler}>
      <div className="article-form-header">CREATE NEW ARTILCE</div>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a title for article."
        onInput={inputHandler}
      />
      <Input
        id="description"
        label="Description"
        rows="3"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a description for article."
        onInput={inputHandler}
      />
      <Input
        id="text"
        label="Text"
        rows="15"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a text for article."
        onInput={inputHandler}
      />
      <Button
        disabled={!formState.isValid}
        type="submit"
        className={`${
          formState.isValid
            ? `form-submit-button-valid`
            : `form-submit-button-invalid`
        }`}
      >
        CREATE ARTICLE
      </Button>
    </form>
  );
};

export default NewArticle;
