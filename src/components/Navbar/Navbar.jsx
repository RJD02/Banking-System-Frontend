import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.modules.css";
// navbar navbar-dark bg-dark
function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a
          class="navbar-brand"
          href="https://www.thesparksfoundationsingapore.org/"
        >
          Sparks Foundation
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto me-2 mb-2 mb-lg-0">
            <li class="nav-item me-3">
              <Link to="/">Home</Link>
            </li>
            <li class="nav-item me-3">
              <Link to="/customersList">Customers</Link>
            </li>
            <li class="nav-item">
              <Link to="/transferHistory">History</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
