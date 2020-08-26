import React from "react";

import Input from "../../shared/components/Input";
import Button from "../../shared/components/Button";
import { VALIDATOR_REQUIRE } from "../../shared/utilities/validators";
import { useForm } from "../../shared/utilities/form-validation-hook";

import "./NewArticle.css";

const NewArticle = () => {
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      text: {
        value: "",
        isValid: false,
      },
      imageUrl: {
        value: "",
        isValid: false,
      },
    },
    false
  );

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
        id="imageUrl"
        label="Image URL"
        rows="2"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a image (url) for article."
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
        rows="25"
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
