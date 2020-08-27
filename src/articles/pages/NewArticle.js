import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import Input from "../../shared/components/Input";
import Button from "../../shared/components/Button";
import { VALIDATOR_REQUIRE } from "../../shared/utilities/validators";
import { useForm } from "../../shared/utilities/form-validation-hook";
import { useHttpClient } from "../../shared/utilities/http-hook";
import { AuthContext } from "../../shared/utilities/contex";

import "./NewArticle.css";

const NewArticle = () => {
  const auth = useContext(AuthContext);
  const { loading, error, request, clearError } = useHttpClient();

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

  const history = useHistory();

  const articleSubmithandler = async (event) => {
    event.preventDefault();
    let title = formState.inputs.title.value;
    try {
      await request(
        "http://localhost:5000/api/articles",
        "POST",
        JSON.stringify({
          creator: auth.userId,
          description: formState.inputs.description.value,
          imageUrl: formState.inputs.imageUrl.value,
          text: formState.inputs.text.value,
          title: title,
        }),
        {
          "Content-Type": "application/json",
        }
      );
      history.push("/");
    } catch (err) {}
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
