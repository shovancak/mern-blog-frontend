import React from "react";

import Input from "../../shared/components/Input";
import { VALIDATOR_REQUIRE } from "../../shared/utilities/validators";

import "./NewArticle.css";

const NewArticle = () => {
  return (
    <form className="article-form center">
      <div className="article-form-header">CREATE NEW ARTILCE</div>
      <Input
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a title."
      />
    </form>
  );
};

export default NewArticle;
