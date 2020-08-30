import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { VALIDATOR_REQUIRE } from "../../shared/utilities/validators";
import { useForm } from "../../shared/utilities/form-validation-hook";
import { useHttpClient } from "../../shared/utilities/http-hook";

import Card from "../../shared/components/Card";
import Input from "../../shared/components/Input";
import Button from "../../shared/components/Button";
import Modal from "../../shared/components/Modal";

import "./UpdateArticle.css";

const UpdateArticle = () => {
  const articleId = useParams().articleId;

  const [showModal, setShowModal] = useState(false);
  const [articleToUpdate, setArticleToUpdate] = useState(undefined);

  const { loading, error, request, clearError } = useHttpClient();

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
      imageUrl: {
        value: "",
        isValid: false,
      },
    },
    true
  );

  useEffect(() => {
    const sendRequest = async () => {
      try {
        const data = await request(
          `http://localhost:5000/api/articles/${articleId}`
        );
        setArticleToUpdate(data.article);
        setFormData(
          {
            title: {
              value: data.article.title,
              isValid: true,
            },
            description: {
              value: data.article.description,
              isValid: true,
            },
            text: {
              value: data.article.text,
              isValid: true,
            },
            imageUrl: {
              value: data.article.imageUrl,
              isValid: true,
            },
          },
          true
        );
      } catch (err) {}
    };
    sendRequest();
  }, [request, articleId, setFormData]);

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

  if (loading) {
    return (
      <Card>
        <h2>Loading.</h2>
      </Card>
    );
  }

  if (!articleToUpdate && !error) {
    return (
      <Card>
        <h2>Article not found.</h2>
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
      {!loading && articleToUpdate ? (
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
            initialValue={articleToUpdate.title}
            initialValid={true}
          />
          <Input
            id="imageUrl"
            label="Image"
            rows="2"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a image (url) for article"
            onInput={inputHandler}
            initialValue={articleToUpdate.imageUrl}
            initialValid={true}
          />
          <Input
            id="description"
            label="Description"
            rows="3"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a description for article"
            onInput={inputHandler}
            initialValue={articleToUpdate.description}
            initialValid={true}
          />
          <Input
            id="text"
            label="Text"
            rows="25"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a text for article"
            onInput={inputHandler}
            initialValue={articleToUpdate.text}
            initialValid={true}
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
      ) : null}
    </React.Fragment>
  );
};

export default UpdateArticle;
