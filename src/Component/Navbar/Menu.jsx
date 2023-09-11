import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Menu = () => {
  let navigate = useNavigate();

  let role = localStorage.getItem("role");
  let token = localStorage.getItem("token");

  let logoutHandler = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("token");
    alert("are you sure, you want to logout");
    navigate("/login");
  };

  return (
    <div id="menu">
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/gallery">
          <li>Gallery</li>
        </Link>
        {role === "ROLE_ADMIN" ? (
          <Link to="/adminDashBoard">
            <li>Admin Dashboard</li>
          </Link>
        ) : null}
        {token ? (
          <Link to="/login">
            <li onClick={logoutHandler}>Logout</li>
          </Link>
        ) : (
          <>
            <Link to="/login">
              <li>SignIn</li>
            </Link>
            <Link to="/register">
              <li>SignUp</li>
            </Link>
          </>
        )}
      </ul>
    </div>
  );
};

export default Menu;
