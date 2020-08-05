import React from "react";
import ArticleList from "./components/ArticleList";

import "./UsersArticles.css";

const DUMMY_ARTICLES = [
  {
    id: "a1",
    creator: "u1",
    title: "MERN Stack",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRHaXnpq17S4ClpSWeZwg8VT4U6tBnJuccZaA&usqp=CAU",
    description:
      "One of the most popular technology stacks in web development.",
    text:
      "MERN Stack is a Javascript Stack that is used for easier and faster deployment of full-stack web applications. MERN Stack comprises of 4 technologies namely: MongoDB, Express, React and Node.js. It is designed to make the development process smoother and easier.",
  },
  {
    id: "a2",
    creator: "u1",
    title: "React",
    imageUrl: "https://probella.com/wp-content/uploads/2018/03/React-JS.png",
    description:
      "React JS is a JavaScript library used in web development to build interactive elements on websites.",
    text:
      "React is a JavaScript library that specializes in helping developers build user interfaces, or UIs.In terms of websites and web applications, UIs are the collection of on- screen menus, search bars, buttons, and anything else someone interacts with to USE a website or app.",
  },
  {
    id: "a3",
    creator: "u2",
    title: "NodeJs",
    imageUrl: "https://miro.medium.com/proxy/1*q9ww_u32hhpMaA-Q_s1ujw.png",
    description:
      "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
    text:
      "Node.js is a free, open-sourced, cross-platform JavaScript run-time environment that lets developers write command line tools and server-side scripts outside of a browser.",
  },
];

const UsersArticles = () => {
  return (
    <div className="articles">
      <ArticleList items={DUMMY_ARTICLES} />
    </div>
  );
};

export default UsersArticles;
