import React from "react";

import Input from "../../shared/components/Input";

import "./NewArticle.css";

const NewArticle = () => {
  return (
    <form className="article-form center">
      <Input element="input" type="text" label="Title" />
    </form>
  );
};

export default NewArticle;
