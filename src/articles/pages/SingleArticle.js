import React, { useState, useContext, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import Button from "../../shared/components/Button";
import Modal from "../../shared/components/Modal";
import Card from "../../shared/components/Card";
import { AuthContext } from "../../shared/utilities/contex";
import { useHttpClient } from "../../shared/utilities/http-hook";

import "./SingleArticle.css";

const SingleArtilce = () => {
  const { loading, error, request, clearError } = useHttpClient();
  const [singleArticle, setSingleArticle] = useState(undefined);
  const articleId = useParams().articleId;
  const history = useHistory();

  useEffect(() => {
    const sendRequest = async () => {
      try {
        const data = await request(
          `http://localhost:5000/api/articles/${articleId}`
        );
        setSingleArticle(data.article);
      } catch (err) {}
    };
    sendRequest();
  }, [request, articleId]);

  const auth = useContext(AuthContext);

  const [showModal, setShowModal] = useState(false);

  const showDeleteWarningHandler = () => {
    setShowModal(true);
  };

  const closeDeleteWarnigHandler = () => {
    setShowModal(false);
  };

  const deleteArticleHandler = async () => {
    try {
      await request(
        `http://localhost:5000/api/articles/${articleId}`,
        "DELETE"
      );
    } catch (err) {}
    setShowModal(false);
    history.push("/");
  };

  if (!singleArticle) {
    return (
      <Card>
        <h2>Article does not exist.</h2>
      </Card>
    );
  }

  return (
    <React.Fragment>
      {showModal && (
        <Modal
          className="modal-warning"
          show={showModal}
          onCancel={closeDeleteWarnigHandler}
        >
          <div className="delete-article-modal">
            <div className="delete-article-modal-question">
              Do you really want to delete this article?
            </div>
            <div className="delete-article-modal-buttons">
              <Button
                className="single-article-button"
                onClick={deleteArticleHandler}
              >
                YES
              </Button>
              <Button
                className="single-article-button"
                onClick={closeDeleteWarnigHandler}
              >
                NO
              </Button>
            </div>
          </div>
        </Modal>
      )}
      <div className="single-article-card">
        <div className="single-article-image">
          <img src={singleArticle.imageUrl} alt="Article" />
        </div>
        <div className="single-article-title">{singleArticle.title}</div>
        <div className="single-article-description">
          {singleArticle.description}
        </div>
        <div className="single-article-text">{singleArticle.text}</div>
        {auth.loggedIn ? (
          <div className="single-article-buttons">
            <Button
              to={`/articles/update/${articleId}`}
              className="single-article-button"
            >
              UPDATE
            </Button>
            <Button
              className="single-article-button"
              onClick={showDeleteWarningHandler}
            >
              DELETE
            </Button>
          </div>
        ) : null}
      </div>
    </React.Fragment>
  );
};

export default SingleArtilce;
