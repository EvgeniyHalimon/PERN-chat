import React from "react"
import {Navigate} from "react-router-dom"

const ProtectedRoute = ({
    isLoggedIn,
    redirectPath = '/login',
    children,
  }) => {
    if (!isLoggedIn) {
      return <Navigate to={redirectPath} />;
    }
  
    return children;
  };

export default ProtectedRoute