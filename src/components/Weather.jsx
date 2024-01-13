import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import CurrentDate from "./CurrentDate";

const Weather = () => {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const apiKey = "94292a708cbc285b8248f4e63ffa0bc4";

  const getWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric&lang=it`
      );

      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const getWeatherIconUrl = (iconCode) => {
    return `https://openweathermap.org/img/w/${iconCode}.png`;
  };

  return (
    <div className="bg-body-secondary">
      <div className="mb-3 d-flex align-items-center justify-content-around">
        <CurrentDate />
        <div className="d-flex flex-column w-50">
          <label htmlFor="locationInput" className="form-label">Enter City and Country:</label>
          <input
            type="text"
            className="form-control"
            placeholder="es: Rome ,IT"
            id="locationInput"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <Button onClick={getWeatherData} variant="success text-white my-3">
          Search
        </Button>
      </div>

      {weatherData && (
        <div className="d-flex justify-content-center">
          <div className="py-4 w-100 text-center">
            <h2 className="fw-bold">Weather in: {weatherData.name}, {weatherData.sys.country}</h2>
            <p className="fs-4 text-secondary">
              Temperature: <span className="text-dark fw-bold">{weatherData.main.temp_max} °C</span> 
            </p>
            <p className="fs-4 text-secondary">
              Humidity: <span className="text-dark fw-bold">{weatherData.main.humidity} %</span>
            </p>
            <p className="fs-4 text-secondary">
              Weather: <span className="text-dark fw-bold">{weatherData.weather[0].description}</span>
            </p>
            <p className="fs-4 text-secondary">Wind speed: <span className="text-dark fw-bold">{weatherData.wind.speed} km/h</span></p>
            <img
              src={getWeatherIconUrl(weatherData.weather[0].icon)}
              alt={weatherData.weather[0].description}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
