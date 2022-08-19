import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import AuthContext from "./store/auth-context";

function App() {
  // -HL Navigational gaurds: conditionally render routes!
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />

        {!isLoggedIn && (
          <Route path="/auth" element={<AuthPage />} />
        )}

        <Route
          path="/profile"
          element={
            isLoggedIn ? (
              <UserProfile />
            ) : (
              <Navigate to="/Authentication/auth" />
            )
          }
        />

        <Route path="*" element={<Navigate to="" />} />
      </Routes>
    </Layout>
  );
}

export default App;
