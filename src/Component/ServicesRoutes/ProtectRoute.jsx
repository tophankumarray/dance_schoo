import React from "react";
import { Navigate } from "react-router-dom";

const ProtectRoute = ({ children }) => {
  console.log(localStorage.getItem("token"));
  if (localStorage.getItem("token")) {
    return <>{children}</>;
  } else {
    return (
      <>
        {alert("Please Login to view Page")}
        <Navigate to="/login" />
      </>
    );
  }
};

export default ProtectRoute;
