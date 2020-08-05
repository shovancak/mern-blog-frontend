import React from "react";

import "./ArticleItem.css";

const ArticleItem = (props) => {
  return (
    <div className="article-item">
      <div className="article-item-info">
        <div className="article-item-info-image">
          <img src={props.image} alt="Article"></img>
        </div>
        <div className="article-item-info-td">
          <div className="article-item-info-title">{props.title}</div>
          <div className="article-item-info-desc">DESCRIPTION</div>
        </div>
      </div>
    </div>
  );
};

export default ArticleItem;
