import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/style.css";
import "../App.css";

const Nav = ({ isAuthenticated, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/"); // Redirect to login after logout
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          ITI Employees Management System
        </Link>
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
              <Link to="/" className="nav-link" activeClassName="active">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/instructors"
                className="nav-link"
                activeClassName="active"
              >
                Instructors
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/courses" className="nav-link" activeClassName="active">
                Courses
              </Link>
            </li>
          </ul>
          <form className="form-inline">
            <div className="d-flex mx-5">
              <input
                className="form-control mr-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-info mx-4 d-flex" type="reset">
                Search
              </button>
              {isAuthenticated && (
                <button className="btn btn-danger mx-5" onClick={handleLogout}>
                  Logout
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
