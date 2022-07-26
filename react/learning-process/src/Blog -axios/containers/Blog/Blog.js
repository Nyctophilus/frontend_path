import React, { Component } from "react";

import Posts from "../Posts/Posts";
import NewPost from "../NewPost/NewPost";
import FullPost from "../FullPost/FullPost";

import "./Blog.css";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
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
                  <NavLink
                    to="/"
                    // -HL Custom class,Style to NavLink
                    className={({ isActive }) =>
                      isActive ? "my-active" : null
                    }
                    style={({ isActive }) =>
                      isActive
                        ? {
                            color: "red",
                            textDecoration: "underline",
                          }
                        : null
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  {/* -HL options of Router-Link */}
                  <NavLink
                    to={{
                      // ${this.props.match.url}
                      pathname: `/new-post`,
                      hash: "#submit",
                      search: "?quick-submit=true",
                    }}
                  >
                    New Post
                  </NavLink>
                </li>
              </ul>
            </nav>
          </header>

          <Routes>
            <Route path="/" element={<Posts />} exact />
            <Route
              path="/posts/:id"
              element={<FullPost />}
            />
            <Route path="/new-post" element={<NewPost />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default Blog;
