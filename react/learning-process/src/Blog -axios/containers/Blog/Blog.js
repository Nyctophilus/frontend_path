import React, { Component } from "react";

import Posts from "../Posts/Posts";
import NewPost from "../NewPost/NewPost";

import "./Blog.css";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from "react-router-dom";

class Blog extends Component {
  render() {
    return (
      <Router>
        <div className="Blog">
          <header>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  {/* -HL options of Router-Link */}
                  <Link
                    to={{
                      pathname: "/new-post",
                      hash: "#submit",
                      search: "?quick-submit=true",
                    }}
                  >
                    New Post
                  </Link>
                </li>
              </ul>
            </nav>
          </header>

          <Routes>
            <Route path="/" element={<Posts />} exact />
            <Route path="/new-post" element={<NewPost />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default Blog;
