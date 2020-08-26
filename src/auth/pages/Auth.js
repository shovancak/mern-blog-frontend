import React, { useState, useContext } from "react";

import Input from "../../shared/components/Input";
import Button from "../../shared/components/Button";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/utilities/validators";
import { useForm } from "../../shared/utilities/form-validation-hook";
import { AuthContext } from "../../shared/utilities/contex";

import "./Auth.css";

const Auth = () => {
  const auth = useContext(AuthContext);

  const [loginMode, setLoginMode] = useState(true);

  const [formState, inputHandler, setFormData] = useForm(
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

  const authModeHandler = (event) => {
    event.preventDefault();
    if (!loginMode) {
      setFormData(
        {
          ...formState.inputs,
          username: undefined,
          imageUrl: undefined,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          username: {
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
    }
    setLoginMode((previousMode) => !previousMode);
  };

  const authSubmitHandler = async (event) => {
    event.preventDefault();
    console.log("ZAZAasdasdsadZA");
    let loging = {
      name: formState.inputs.username.value,
      imageUrl: formState.inputs.imageUrl.value,
      email: formState.inputs.email.value,
      password: formState.inputs.password.value,
    };
    console.log(loging);
    console.log("AFTER LOG");
    if (loginMode) {
    } else {
      try {
        const response = await fetch("http://localhost:5000/api/users/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formState.inputs.username.value,
            imageUrl: formState.inputs.imageUrl.value,
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
          }),
        });
        console.log(response);
      } catch (err) {
        console.log("Something went wrong:", err);
      }
    }
    auth.login();
  };

  return (
    <form className="auth-form center" onSubmit={authSubmitHandler}>
      <div className="auth-form-header">LOGIN FORM</div>
      {!loginMode ? (
        <React.Fragment>
          <Input
            id="username"
            element="input"
            type="text"
            label="Username"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a username."
            onInput={inputHandler}
          />
          <Input
            id="imageUrl"
            element="input"
            type="text"
            label="Iamge"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a image URL."
            onInput={inputHandler}
          />
        </React.Fragment>
      ) : null}
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
            ? "auth-login-signup-button-valid"
            : "auth-login-signup-button-invalid"
        }
      >
        {loginMode ? "LOGIN" : "SIGN UP"}
      </Button>
      <Button className="auth-switch-mode-button" onClick={authModeHandler}>
        {loginMode ? "SIGN UP FORM" : "LOGIN FORM"}
      </Button>
    </form>
  );
};

export default Auth;
