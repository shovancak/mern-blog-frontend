import React from "react";

import ArticleItem from "./ArticleItem";
import Card from "../../../shared/components/Card";

import "./ArticleList.css";

const ArticleList = (props) => {
  if (props.items.length === 0) {
    return (
      <Card>
        <h2>You have no articles created.</h2>
      </Card>
    );
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
