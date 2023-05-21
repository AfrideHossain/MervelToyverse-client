import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  // states
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  // firbase auth
  const auth = getAuth(app);

  // Context's functions
  const userCreateWithEmailAndPass = (email, pass) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  // Auth state change observer
  useEffect(() => {
    let unsubscribe = onAuthStateChanged(auth, (currentUserInfo) => {
      setUser(currentUserInfo);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, [auth]);

  // context values
  const contextValue = {
    user,
    loading,
    userCreateWithEmailAndPass,
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
