import React, { useCallback } from "react";

import Input from "../../shared/components/Input";
import { VALIDATOR_REQUIRE } from "../../shared/utilities/validators";

import "./NewArticle.css";

const NewArticle = () => {
  const inputTitleHandler = useCallback((id, value, isValid) => {}, []);

  const inputDescriptionHandler = useCallback((id, value, isValid) => {}, []);

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
        onInput={inputTitleHandler}
      />
      <Input
        id="description"
        label="Description"
        rows="4"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a description."
        onInput={inputDescriptionHandler}
      />
    </form>
  );
};

export default NewArticle;
