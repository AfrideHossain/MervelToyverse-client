import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import Spinner from "../Shared/Spinner/Spinner";
import { Navigate, useLocation } from "react-router-dom";

const SecureRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const locationFrom = useLocation();

  if (loading) {
    return <Spinner />;
  }
  if (!user) {
    return <Navigate state={{ from: locationFrom }} to="/login" replace />;
  }

  return children;
};

export default SecureRoute;
