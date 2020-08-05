import React from "react";

import "./ArticleItem.css";

const ArticleItem = (props) => {
  return (
    <div className="article-item">
      <div className="article-item-title">TITLE</div>
      <div className="article-item-info">
        <div className="article-item-info-image">IMAGE</div>
        <div>
          <div>DESCRIPTION</div>
          <div>TEXT</div>
        </div>
      </div>
    </div>
  );
};

export default ArticleItem;
