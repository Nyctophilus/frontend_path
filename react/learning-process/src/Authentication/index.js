import App from "./App";
import { AuthContextProvider } from "./store/auth-context";

const index = () => (
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);

export default index;
