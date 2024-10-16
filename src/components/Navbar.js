import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ toggleSidebar, handleShow, balance }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        {/* <img
          src="https://w7.pngwing.com/pngs/508/394/png-transparent-hamburger-button-computer-icons-menu-number-list-angle-text-rectangle.png"
          alt="Menu"
          style={{ height: "50px", paddingLeft: "1rem", width: "90px" }}
          onClick={toggleSidebar}
        /> */}
        <button class="action_button" onClick={toggleSidebar}>
          <svg
            stroke="#b1bad3"
            fill="#b1bad3"
            stroke-width="0"
            viewBox="0 0 1024 1024"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
          </svg>
        </button>
        <div className="container-fluid">
          <a className="navbar-brand" href="/home">
            <img
              src="https://plusbet.in/wp-content/uploads/2024/08/stake-logo.png"
              alt="Menu"
              style={{ height: "50px", paddingLeft: "1rem", width: "90px" }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/home" style={{ textDecoration: "none" }}>
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-disabled="true"
                  style={{
                    border: "1px solid grey",
                    paddingLeft: "25px",
                    paddingRight: "25px",
                    borderRadius: "5px 0px 0px 5px",
                    fontSize: "15px",
                    marginLeft: "500px",
                    borderWidth: "1px 0px 1px 1px",
                  }}
                >
                  ${balance} {/* Display balance here */}
                </a>
              </li>
              <button
                type="button"
                className="btn btn-primary"
                style={{
                  fontSize: "14px",
                  borderRadius: "0px 5px 5px 0px",
                }}
                onClick={handleShow}
              >
                Wallet
              </button>
            </ul>
            <i className="fa-solid fa-user" style={{ color: "#ffffff" }}></i>
          </div>
        </div>
      </nav>
    </div>
  );
}
