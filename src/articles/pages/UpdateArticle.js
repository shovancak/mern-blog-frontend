import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { VALIDATOR_REQUIRE } from "../../shared/utilities/validators";
import { useForm } from "../../shared/utilities/form-validation-hook";

import Card from "../../shared/components/Card";
import Input from "../../shared/components/Input";
import Button from "../../shared/components/Button";
import Modal from "../../shared/components/Modal";

import "./UpdateArticle.css";

const DUMMY_ARTICLES = [
  {
    id: "a1",
    creator: "u1",
    title: "MERN Stack",
    imageUrl: "https://i.morioh.com/67feeaf72f.png",
    description:
      "One of the most popular technology stacks in web development.",
    text:
      "MERN Stack is a Javascript Stack that is used for easier and faster deployment of full-stack web applications. MERN Stack comprises of 4 technologies namely: MongoDB, Express, React and Node.js. It is designed to make the development process smoother and easier.",
  },
  {
    id: "a2",
    creator: "u2",
    title: "React",
    imageUrl: "https://probella.com/wp-content/uploads/2018/03/React-JS.png",
    description:
      "React JS is a JavaScript library used in web development to build interactive elements on websites.",
    text:
      "React is a JavaScript library that specializes in helping developers build user interfaces, or UIs.In terms of websites and web applications, UIs are the collection of on- screen menus, search bars, buttons, and anything else someone interacts with to USE a website or app.",
  },
  {
    id: "a3",
    creator: "u1",
    title: "NodeJs",
    imageUrl: "https://miro.medium.com/proxy/1*q9ww_u32hhpMaA-Q_s1ujw.png",
    description:
      "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
    text:
      "Node.js is a free, open-sourced, cross-platform JavaScript run-time environment that lets developers write command line tools and server-side scripts outside of a browser.",
  },
];

const UpdateArticle = () => {
  const articleId = useParams().articleId;
  const [loading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);

  const [formState, inputHandler, setFormData] = useForm(
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
    },
    true
  );

  const articleToUpdate = DUMMY_ARTICLES.find(
    (article) => article.id === articleId
  );

  useEffect(() => {
    if (articleToUpdate) {
      setFormData(
        {
          title: {
            value: articleToUpdate.title,
            isValid: true,
          },
          description: {
            value: articleToUpdate.description,
            isValid: true,
          },
          text: {
            value: articleToUpdate.text,
            isValid: true,
          },
        },
        true
      );
    }
    setLoading(false);
  }, [setFormData, articleToUpdate]);

  const articleUpdateSubmithandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  const showUpadateMessageModal = () => {
    setShowModal(true);
  };

  const closeUpdateMessageModal = () => {
    setShowModal(false);
  };

  if (!articleToUpdate) {
    return (
      <Card>
        <h2>Article not found.</h2>
      </Card>
    );
  }

  if (loading) {
    return (
      <Card>
        <h2>Loading.</h2>
      </Card>
    );
  }

  return (
    <React.Fragment>
      {showModal ? (
        <Modal
          className="modal-warning"
          show={showModal}
          onCancel={closeUpdateMessageModal}
        >
          <div className="update-article-modal">
            <div className="update-article-modal-question">
              Article has been updated.
            </div>
          </div>
        </Modal>
      ) : null}
      <form
        className="article-form center"
        onSubmit={articleUpdateSubmithandler}
      >
        <div className="article-form-header">UPDATE ARTILCE</div>
        <Input
          id="title"
          element="input"
          type="text"
          label="Title"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a title for article"
          onInput={inputHandler}
          initialValue={formState.inputs.title.value}
          initialValid={formState.inputs.title.isValid}
        />
        <Input
          id="description"
          label="Description"
          rows="3"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a description for article"
          onInput={inputHandler}
          initialValue={formState.inputs.description.value}
          initialValid={formState.inputs.description.isValid}
        />
        <Input
          id="text"
          label="Text"
          rows="25"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a text for article"
          onInput={inputHandler}
          initialValue={formState.inputs.text.value}
          initialValid={formState.inputs.text.isValid}
        />
        <Button
          type="submit"
          onClick={showUpadateMessageModal}
          disabled={!formState.isValid}
          className={`${
            formState.isValid
              ? `form-submit-button-valid`
              : `form-submit-button-invalid`
          }`}
        >
          UPDATE
        </Button>
      </form>
    </React.Fragment>
  );
};

export default UpdateArticle;
