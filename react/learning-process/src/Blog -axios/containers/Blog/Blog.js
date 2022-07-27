import React, { Component } from "react";
// import axios from 'axios';
import {
  Route,
  Routes,
  NavLink,
  Navigate,
} from "react-router-dom";

import "./Blog.css";
import Posts from "./Posts/Posts";

// -HL lazying loading
// import NewPost from "./NewPost/NewPost";
const AsyncNewPost = React.lazy(() =>
  import("./NewPost/NewPost")
);

class Blog extends Component {
  state = {
    auth: true,
  };

  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/posts/"
                  // -HL custom class, style to links in router
                  className={({ isActive }) =>
                    isActive ? "my-active" : null
                  }
                  style={({ isActive }) =>
                    isActive
                      ? {
                          textDecoration: "underline",
                        }
                      : null
                  }
                >
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-post",
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
          {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home 2</h1>} /> */}

          {/* {this.state.auth && (
              <Route
                path="/new-post"
                element={<NewPost />}
              />
            )} */}
          <Route path="/posts" element={<Posts />} />
          <Route
            path="/new-post"
            element={
              // -HL async lazy loading -2
              <React.Suspense fallback={<>Loading...</>}>
                <AsyncNewPost />
              </React.Suspense>
            }
          />
          <Route
            path="/"
            element={<Navigate to="/posts" replace />}
          />
          <Route
            path="*"
            element={<h1>Page Not Found... 404</h1>}
          />
        </Routes>
      </div>
    );
  }
}

export default Blog;
