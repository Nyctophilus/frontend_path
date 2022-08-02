import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

import { AuthContextProvider } from "./context/auth-context";
import AuthContext from "./context/auth-context";

function App() {
  const auth = useContext(AuthContext);

  console.log(auth);

  return (
    <AuthContextProvider>
      <MainHeader />
      <main>
        <Login />
        <Home />
      </main>
    </AuthContextProvider>
  );
}

export default App;
