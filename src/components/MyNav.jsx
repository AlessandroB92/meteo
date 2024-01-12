import React from 'react';
import { Link } from 'react-router-dom';

const MyNav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <Link className="navbar-brand text-white" to="/">
          Home
        </Link>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/Weather">
                Previsioni
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MyNav;
