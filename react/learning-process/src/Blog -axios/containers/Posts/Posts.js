import React, { Component } from "react";
import axios from "../../../axios";
import Post from "../../components/Post/Post";

import { Link } from "react-router-dom";

import classes from "./Posts.module.css";

class Posts extends Component {
  state = {
    posts: [],
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
        console.log(err);
        // this.setState({ error: true });
      });
  }

  clickPostHandler = (id) => {
    axios
      .get(`/posts/${id}`)
      .then((res) => this.setState({ fullPost: res.data }));
  };

  render() {
    let posts = this.state.posts.map((post) => (
      <Link key={post.id} to={`/posts/${post.id}`}>
        <Post
          {...post}
          clicked={() => this.clickPostHandler(post.id)}
        />
      </Link>
    ));

    if (this.state.error)
      posts = (
        <p style={{ textAlign: "center", color: "red" }}>
          Something went wrong!
        </p>
      );

    return (
      <section className={classes.Posts}>{posts}</section>
    );
  }
}

export default Posts;
