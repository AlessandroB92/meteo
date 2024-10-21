import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Weather App © {new Date().getFullYear()} | Developed by Alessandro Basile</p>
        <p>
          Data provided by <a href="https://openweathermap.org/" target="_blank" rel="noopener noreferrer">OpenWeatherMap</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
