import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export const IsProtected = ({ children }) => {
  const { isLoading, isLoggedIn } = useContext(AuthContext);
  if (isLoading) {
    return <p>Loading....</p>;
  }
  if (!isLoggedIn) {
    <Navigate to="/login" />;
  }
  return children;
};
