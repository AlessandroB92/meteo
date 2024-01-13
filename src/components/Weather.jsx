import React, { useState } from "react";
import {Row, Col} from 'react-bootstrap';
import { FaTemperatureHigh } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
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
    <div>
      <div className="mb-3 d-flex align-items-center justify-content-evenly bg-body-secondary">
        <CurrentDate />
        <Row className=" w-50">
          <Col xs={12}><label htmlFor="locationInput" className="form-label mx-1">Enter City and Country:</label></Col>
          <Col>
            <input
              type="text"
              className="form-control"
              placeholder="es: Rome ,IT"
              id="locationInput"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </Col>
        <Col>
          <Button onClick={getWeatherData} variant="info text-white">
            Search
          </Button>
        </Col>
        </Row>
      </div>

      {weatherData && (
        <div className="d-flex justify-content-center">
          <Row className="py-4 w-100 text-center">
              <h2 className="fw-bold">Weather in: {weatherData.name}, {weatherData.sys.country}</h2>
              <Col xs={12}>
              <p className="fs-4">
                Weather: <span className="text-dark fw-bold">{weatherData.weather[0].description}</span>
              </p>
                <img
                src={getWeatherIconUrl(weatherData.weather[0].icon)}
                alt={weatherData.weather[0].description}
              />
              </Col>
            <Col className="d-flex flex-column justify-content-center align-items-center p-3 bg-primary-subtle rounded-4 m-2">
              <p className="fs-4">
                Temperature: <span className="text-dark fw-bold">{weatherData.main.temp} °C</span> 
              </p>
              <p className="fs-4">
                Max - Min: <span className="text-dark fw-bold">{weatherData.main.temp_max} / {weatherData.main.temp_min} °C</span> 
              </p>
              <FaTemperatureHigh className="fs-3"/>
            </Col>
            <Col className="d-flex flex-column justify-content-center align-items-center p-3 bg-primary-subtle rounded-4 m-2">
              <p className="fs-4">
                Humidity: <span className="text-dark fw-bold">{weatherData.main.humidity} %</span>
              </p>
              <WiHumidity className="fs-1" />
            </Col>
            <Col className="d-flex flex-column justify-content-center align-items-center p-3 bg-primary-subtle rounded-4 m-2">
              <p className="fs-4">
                Weather: <span className="text-dark fw-bold">{weatherData.weather[0].description}</span>
              </p>
            </Col>
            <Col className="d-flex flex-column justify-content-center align-items-center p-2 bg-primary-subtle rounded-4 m-2">
              <p className="fs-4">Wind speed: <span className="text-dark fw-bold">{weatherData.wind.speed} km/h</span></p>
              <p className="fs-4">Wind degrees: <span className="text-dark fw-bold">{weatherData.wind.deg}°</span></p>
            </Col>
            </Row>
            </div>
      )}
    </div>
  );
};

export default Weather;
