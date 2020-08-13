import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";

import Button from "../../shared/components/Button";
import Modal from "../../shared/components/Modal";
import Card from "../../shared/components/Card";
import { AuthContext } from "../../shared/utilities/contex";

import "./SingleArticle.css";

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

const SingleArtilce = (prosp = DUMMY_ARTICLES) => {
  const articleId = useParams().articleId;
  const singleArticle = DUMMY_ARTICLES.find(
    (article) => article.id === articleId
  );

  const auth = useContext(AuthContext);

  const [showModal, setShowModal] = useState(false);

  const showDeleteWarningHandler = () => {
    setShowModal(true);
  };

  const closeDeleteWarnigHandler = () => {
    setShowModal(false);
  };

  const deleteArticleHandler = () => {
    console.log("ARTICLE HAS BEEN DELETED");
    setShowModal(false);
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
