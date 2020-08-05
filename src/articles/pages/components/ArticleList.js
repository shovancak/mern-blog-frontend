import React from "react";

import ArticleItem from "./ArticleItem";

import "./ArticleList.css";

const ArticleList = (props) => {
  if (props.items.length === 0) {
    return <div>No articles yet.</div>;
  }
  return (
    <ul className="article-list">
      {props.items.map((article) => {
        return (
          <ArticleItem
            key={article.id}
            articleId={article.id}
            creatorId={article.creator}
            title={article.title}
            description={article.description}
            text={article.text}
            image={article.imageUrl}
          />
        );
      })}
    </ul>
  );
};

export default ArticleList;
