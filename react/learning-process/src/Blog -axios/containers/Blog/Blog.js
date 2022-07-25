import React, { Component } from "react";
import axios from "axios";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

class Blog extends Component {
  state = {
    posts: [],
    fullPost: null,
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        const posts = res.data.slice(0, 4);
        const updatedPosts = posts.map((post) => {
          return {
            ...post,
            auther: "Fayad",
          };
        });
        this.setState({ posts: updatedPosts });
      });
  }

  clickPostHandler = (id) => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      )
      .then((res) => this.setState({ fullPost: res.data }));
  };

  render() {
    return (
      <div>
        <section className="Posts">
          {this.state.posts.map((post) => (
            <Post
              key={post.id}
              {...post}
              clicked={() => this.clickPostHandler(post.id)}
            />
          ))}
        </section>
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
