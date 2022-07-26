import React, { Component } from "react";
import axios from "axios";

import "./NewPost.css";

class NewPost extends Component {
  state = {
    title: "",
    body: "",
    author: "Medo",
  };

  postHandler = () => {
    axios
      .post("/posts", {
        ...this.state,
      })
      .then((res) => console.log(res));
  };

  render() {
    return (
      <div className="NewPost">
        <h1>Add a Post</h1>
        <label>Title</label>
        <input
          type="text"
          value={this.state.title}
          onChange={(event) =>
            this.setState({ title: event.target.value })
          }
        />
        <label>body</label>
        <textarea
          rows="4"
          value={this.state.body}
          onChange={(event) =>
            this.setState({ body: event.target.value })
          }
        />
        <label>Author</label>
        <select
          value={this.state.author}
          onChange={(event) =>
            this.setState({ author: event.target.value })
          }
        >
          <option value="Medo">Medo</option>
          <option value="Max">Max</option>
        </select>
        <button onClick={this.postHandler}>Add Post</button>
      </div>
    );
  }
}

export default NewPost;
