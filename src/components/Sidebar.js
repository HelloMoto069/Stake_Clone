import React from "react";
import "./Sidebar.css";
import { Link, useNavigate } from "react-router-dom";

export default function Sidebar({ show, handleShow }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user-related data from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    navigate("/signin"); // Redirect to the signin page
  };

  return (
    <div className={`${show ? "s-side-bar" : "container1"}`}>
      <div className="divCategory my-1">
        <Link to="/home" style={{ textDecoration: "none" }}>
          <div className="links">
            <i className="fa-solid fa-user" style={{ color: "#ffffff" }}></i>
            <p className="mx-2 p" style={{ color: "#ffffff" }}>
              Games
            </p>
          </div>
        </Link>

        <Link to="/home/profile" style={{ textDecoration: "none" }}>
          <div className="links">
            <i className="fa-solid fa-user" style={{ color: "#ffffff" }}></i>
            <p className="mx-2 p" style={{ color: "#ffffff" }}>
              Profile
            </p>
          </div>
        </Link>

        <div className="links" onClick={handleShow}>
          <i className="fa-solid fa-landmark" style={{ color: "#ffffff" }}></i>
          <p className="mx-2 p" style={{ color: "#ffffff" }}>
            Wallet
          </p>
        </div>

        <hr />

        <div className="divHome">
          <Link to="/home/alltransactions" style={{ textDecoration: "none" }}>
            <div className="links">
              <i
                className="fa-solid fa-rotate-right fa-flip-horizontal"
                style={{ color: "#ffffff" }}
              ></i>
              <p className="mx-2 p" style={{ color: "#ffffff" }}>
                All Transaction
              </p>
            </div>
          </Link>

          <Link to="/home/allbets" style={{ textDecoration: "none" }}>
            <div className="links">
              <i
                className="fa-solid fa-snowflake"
                style={{ color: "#ffffff" }}
              ></i>
              <p className="mx-2 p" style={{ color: "#ffffff" }}>
                My Bets
              </p>
            </div>
          </Link>
        </div>

        <hr />

        <div className="links" onClick={handleLogout}>
          <i
            className="fa-solid fa-right-from-bracket"
            style={{ color: "#ffffff" }}
          ></i>
          <p className="mx-2 p" style={{ color: "#ffffff" }}>
            Logout
          </p>
        </div>
      </div>
    </div>
  );
}
