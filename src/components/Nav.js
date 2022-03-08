import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../actions/auth.js";
import { useDispatch } from "react-redux";
import { AiOutlineAppstore } from "react-icons/ai";
import { IconContext } from "react-icons";
import "../css/App.css";
function Nav(prop) {
  const dispatch = useDispatch();
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to={"/"} className="nav-link">
            <IconContext.Provider
              value={{ color: "white", className: "global-class-name" }}
            >
              <AiOutlineAppstore />
            </IconContext.Provider>
          </Link>
        </li>

        {prop.currentUser && (
          <li className="nav-item">
            <Link to={"/users"} className="nav-link">
              Users
            </Link>
          </li>
        )}
        {prop.currentUser && (
          <li className="nav-item">
            <Link to={"/profile"} className="nav-link">
              Profile
            </Link>
          </li>
        )}
      </div>
      {prop.currentUser ? (
        <div className="navbar-nav ml-auto">
          <li className="nav-item">
            <button
              className="navButton nav-link"
              onClick={() => dispatch(logout())}
            >
              Log out
            </button>
          </li>
        </div>
      ) : (
        <div className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to={"/login"} className="nav-link">
              Login
            </Link>
          </li>
        </div>
      )}
    </nav>
  );
}

export default Nav;
