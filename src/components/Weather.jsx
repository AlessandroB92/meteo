import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import CurrentDate from "./CurrentDate";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const apiKey = "94292a708cbc285b8248f4e63ffa0bc4";

  const getWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=it`
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
        <label htmlFor="cityInput" className="form-label"></label>
        <input
          type="text"
          className="form-control w-50"
          placeholder="Type a city here..."
          id="cityInput"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Button onClick={getWeatherData} variant="success text-white my-3">
          Search
        </Button>
      </div>

      {weatherData && (
        <div className="d-flex justify-content-center">
          <div className="py-4 w-100 text-center">
            <h2 className="fw-bold">Weather in: {weatherData.name}</h2>
            <p className="fw-bold fs-4">
              Temperatura: {weatherData.main.temp}°C
            </p>
            <p className="fw-bold fs-4">
              Umidità: {weatherData.main.humidity}%
            </p>
            <p className="fw-bold fs-4">
              Weather: {weatherData.weather[0].description}
            </p>
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
