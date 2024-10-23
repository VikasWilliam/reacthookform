import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {/* Separate "React-HookForm" as a clickable link */}
            <li className="nav-item">
              <Link className="nav-link" to="/">React-HookForm</Link>
            </li>

            {/* Dropdown for additional options */}
             
              <ul className="navbar-nav">
                <li>
                  <Link className="nav-link" to="/form">
                    HookForm-Demo
                  </Link>
                </li>
              </ul>
            

            <li className="nav-item">
              <Link className="nav-link" to="/javascript">
                JavaScript
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
