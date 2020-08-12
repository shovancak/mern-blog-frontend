import React from "react";

import Input from "../../shared/components/Input";
import Button from "../../shared/components/Button";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../../shared/utilities/validators";
import { useForm } from "../../shared/utilities/form-validation-hook";

import "./Auth.css";

const Auth = () => {
  const [formState, inputHandler] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const authSubmitHandler = (event) => {
    event.preventDefault();
    console.log("LOGGED IN", formState.inputs);
  };

  return (
    <form className="auth-form center" onSubmit={authSubmitHandler}>
      <div className="auth-form-header">LOGIN FORM</div>
      <Input
        id="email"
        element="input"
        type="email"
        label="Email"
        validators={[VALIDATOR_EMAIL()]}
        errorText="Please enter a valid email."
        onInput={inputHandler}
      />
      <Input
        id="password"
        element="input"
        type="password"
        label="Password"
        validators={[VALIDATOR_MINLENGTH(6)]}
        errorText="Please enter a valid password, at least 6 characters long."
        onInput={inputHandler}
      />
      <Button
        type="submit"
        disabled={!formState.isValid}
        className={
          formState.isValid
            ? "auth-submit-button-valid"
            : "auth-submit-button-invalid"
        }
      >
        LOGIN
      </Button>
    </form>
  );
};

export default Auth;
