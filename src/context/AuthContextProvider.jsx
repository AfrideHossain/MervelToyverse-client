import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  // states
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  // firbase auth
  const auth = getAuth(app);

  // firebase auth providers
  const providerGoogle = new GoogleAuthProvider();

  /*************************
   ** Context's functions **
   *************************/

  // Sign up with email and password
  const userCreateWithEmailAndPass = (email, pass) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };
  // Sign in with email and password
  const userLoginWithEmailAndPass = (email, pass) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };
  // Sign in with google
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, providerGoogle);
  };

  // logout function
  const userLogout = () => {
    return signOut(auth);
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
    userLoginWithEmailAndPass,
    googleSignIn,
    userLogout,
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
