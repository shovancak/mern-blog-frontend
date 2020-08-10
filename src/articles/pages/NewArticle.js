import React from "react";

import Input from "../../shared/components/Input";

import "./NewArticle.css";

const NewArticle = () => {
  return (
    <form className="article-form center">
      <div className="article-form-header">CREATE NEW ARTILCE</div>
      <Input
        element="input"
        type="text"
        label="Title"
        validators={[]}
        errorText="Please enter a title."
      />
    </form>
  );
};

export default NewArticle;
