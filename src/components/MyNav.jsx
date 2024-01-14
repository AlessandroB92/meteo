import React from "react";
import { Link } from "react-router-dom";

const MyNav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/">
            Home
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <Link className="nav-link text-white" to="/Forecast">
                Forecast
              </Link>
            </ul>
          </div>
        </div>
      </nav>
        <h1 className="bg-primary-subtle m-0 p-4 text-center border-top border-primary">Meteo-App</h1>
    </>
  );
};

export default MyNav;
