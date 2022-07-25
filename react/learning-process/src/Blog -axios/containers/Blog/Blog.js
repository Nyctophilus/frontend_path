import React, { Component } from "react";

// import axios from "axios";
import axios from "../../../axios";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

class Blog extends Component {
  state = {
    posts: [],
    fullPost: null,
    error: false,
  };

  componentDidMount() {
    axios
      .get("/posts")
      .then((res) => {
        const posts = res.data.slice(0, 4);
        const updatedPosts = posts.map((post) => {
          return {
            ...post,
            auther: "Fayad",
          };
        });
        this.setState({ posts: updatedPosts });
      })
      .catch((err) => {
        this.setState({ error: true });
      });
  }

  clickPostHandler = (id) => {
    axios
      .get(`/posts/${id}`)
      .then((res) => this.setState({ fullPost: res.data }));
  };

  render() {
    let posts = this.state.posts.map((post) => (
      <Post
        key={post.id}
        {...post}
        clicked={() => this.clickPostHandler(post.id)}
      />
    ));

    if (this.state.error)
      posts = (
        <p style={{ textAlign: "center", color: "red" }}>
          Something went wrong!
        </p>
      );

    return (
      <div>
        <section className="Posts">{posts}</section>
        <section>
          <FullPost {...this.state.fullPost} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
