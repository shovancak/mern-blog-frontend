import React from "react";
import { Link } from "react-router-dom";

import "./ArticleItem.css";

const ArticleItem = (props) => {
  return (
    <div className="article-item">
      <Link to={`/articles/${props.articleId}`}>
        <div className="article-item-info">
          <div className="article-item-info-image">
            <img src={props.image} alt="Article"></img>
          </div>
          <div className="article-item-info-td">
            <div className="article-item-info-title">{props.title}</div>
            <div className="article-item-info-desc">{props.description}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ArticleItem;
