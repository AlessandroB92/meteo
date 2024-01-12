import React from "react";
import { Link } from "react-router-dom";

const MyNav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <Link className="navbar-brand text-white" to="/">
          Home
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <Link className="nav-link text-white" to="/Prevision">
              Previsioni
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MyNav;
