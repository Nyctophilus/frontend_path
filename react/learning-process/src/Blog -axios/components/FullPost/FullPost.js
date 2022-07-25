import React from "react";
import "./FullPost.css";
import axios from "axios";

const FullPost = ({ id, title, body }) => {
  const deletePostHandler = () => {
    axios
      .delete(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      )
      .then((res) => console.log(res));
  };

  let post;
  if (!id)
    post = (
      <p style={{ textAlign: "center" }}>
        Please select a Post!
      </p>
    );
  else
    post = (
      <div className="FullPost">
        <h1>{title}</h1>
        <p>{body}</p>
        <div className="Edit">
          <button
            className="Delete"
            onClick={deletePostHandler}
          >
            Delete
          </button>
        </div>
      </div>
    );
  return post;
};

export default FullPost;
