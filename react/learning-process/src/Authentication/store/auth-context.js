import { useCallback } from "react";
import { useEffect } from "react";
import { createContext, useState } from "react";

let logoutTimer;

const AuthContext = createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

const calcRemainingTime = (expTime) => {
  const currentTime = new Date().getTime();
  const adjExpTime = new Date(expTime).getTime();

  const remainingDuration = adjExpTime - currentTime;

  return remainingDuration;
};

const retriveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  const storedExpDate = localStorage.getItem("expTime");

  const remainingTime = calcRemainingTime(storedExpDate);

  if (remainingTime <= 60000) {
    localStorage.removeItem("token");
    localStorage.removeItem("expTime");
    return;
  }

  return {
    token: storedToken,
    duration: remainingTime,
  };
};

export const AuthContextProvider = ({ children }) => {
  const tokenData = retriveStoredToken();

  let initialToken;

  if (tokenData) initialToken = tokenData.token;

  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token; // -HL !! converts to trusy or falsey

  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("expTime");

    if (logoutTimer) clearTimeout(logoutTimer);
  }, []);

  const loginHandler = (token, exp) => {
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("expTime", exp);

    const remainingTime = calcRemainingTime(exp);

    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };

  useEffect(() => {
    if (tokenData) {
      console.log(
        "automatic logined and duration is:",
        tokenData.duration
      );
      logoutTimer = setTimeout(
        logoutHandler,
        tokenData.duration
      );
    }
  }, [tokenData, logoutHandler]);

  return (
    <AuthContext.Provider
      value={{
        token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
