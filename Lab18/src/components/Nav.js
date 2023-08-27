import React from "react";
import "../styles/style.css";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#.">
          ITI Employee Manegment System
        </a>
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
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#.">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#.">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#.">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#.">
                Contact
              </a>
            </li>
          </ul>
          <form className="form-inline">
            <div className="d-flex">
              {" "}
              <input
                className="form-control mr-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-dark" type="submit">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
