import { createContext } from "react";

export const defaultValue = {
  isAuthenticated: false,
  setIsAuthenticated: () => {}
}

const AuthContext = createContext(defaultValue);

export default AuthContext;