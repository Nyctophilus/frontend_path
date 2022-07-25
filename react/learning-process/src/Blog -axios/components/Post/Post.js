import React from "react";

import "./Post.css";

const post = ({ id, title, auther, clicked }) => (
  <article className="Post" onClick={clicked}>
    <h1>{title}</h1>
    <div className="Info">
      <div className="Author">{auther}</div>
    </div>
  </article>
);

export default post;
