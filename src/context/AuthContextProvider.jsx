import { createContext } from "react";
import { getAuth } from "firebase/auth";
import app from "../../firebase/firebaseconfig";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const auth = getAuth(app);
    

    // context values
  const contextValue = {};
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
