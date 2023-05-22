import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import Spinner from "../Shared/Spinner/Spinner";
import { Navigate } from "react-router-dom";

const SecureRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Spinner />;
  }
  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default SecureRoute;
