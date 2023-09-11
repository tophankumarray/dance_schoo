import React from "react";
import { Outlet } from "react-router";
import "../AcademyManager/academymain.css"

const AcademyManagerMainBar = () => {
  return (
    <div className="mainbar">
      <Outlet />
    </div>
  );
};

export default AcademyManagerMainBar;
