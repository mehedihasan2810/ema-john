import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../custom-hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();

  const { currentUser, isAuthLoading } = useAuth();

  if (isAuthLoading) {
    return <h1>Loading...</h1>;
  }

  if (currentUser) {
    return children;
  } else {
    /*
     *Redirect them to the /login page, but save the current
     *location they were trying to go to when they were redirected.
     * this allows use to send them along to that page after they login
     * which is a nicer user experience than dropping them off on the home page
     * https://github.com/mehedihasan2810/react-router/blob/main/examples/auth/src/App.tsx
     */
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};

export default ProtectedRoute;
