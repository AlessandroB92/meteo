import React from "react";
import { Link } from "react-router-dom";
import MovingComponent from "react-moving-text"

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
      <div className="text-center m-auto p-5 bg-body-tertiary">
        <MovingComponent
          type="popIn"
          duration="1800ms"
          delay="1s"
          direction="normal"
          timing="ease-in-out"
          iteration="5"
          fillMode="none"
        >
          <h1 className="fs-1 text-primary fw-bold">My Meteo App!</h1>
        </MovingComponent>
      </div>
    </>
  );
};

export default MyNav;
