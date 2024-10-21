import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
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
      <div className="d-flex align-items-center justify-content-evenly bg-body-secondary">
        <CurrentDate />
        <Row className="p-3 w-50">
          <Col xs={12}>
            <label htmlFor="locationInput" className="form-label mx-1">
              Enter City and Country:
            </label>
          </Col>
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
            <Button onClick={getWeatherData} variant="primary text-white">
              Search
            </Button>
          </Col>
        </Row>
      </div>

      {weatherData && (
        <div className="d-flex justify-content-center">
          <Row className="py-4 w-100 text-center">
            <h2 className="fw-bold">
              {" "}
              {weatherData.name}, {weatherData.sys.country}
            </h2>
            <Col xs={12}>
              <p className="fs-4">
                {" "}
                <span className="fw-bold text-capitalize">
                  {weatherData.weather[0].description}{" "}
                </span>
              </p>
              <img
                src={getWeatherIconUrl(weatherData.weather[0].icon)}
                alt={weatherData.weather[0].description}
              />
            </Col>
            <Col className="d-flex p-3 rounded-4 shadow-lg p-3 mb-5 bg-body-secondary rounded-4 m-2">
              <div className="text-center my-auto w-25">
                <FaTemperatureHigh className="fs-1" />
              </div>
              <div>
                <p className="fs-5 text-secondary">
                  Temperature:{" "}
                  <span className="fw-bold text-dark">
                    {weatherData.main.temp} °C
                  </span>
                </p>
                <p className="fs-5 text-secondary">
                  Max:{" "}
                  <span className="fw-bold text-dark">
                    {weatherData.main.temp_max} °C
                  </span>
                </p>
                <p className="fs-5 text-secondary">
                  Min:{" "}
                  <span className="fw-bold text-dark">
                    {weatherData.main.temp_min} °C
                  </span>
                </p>
              </div>
            </Col>
            <Col className="d-flex p-3 rounded-4 shadow-lg p-3 mb-5 bg-body-secondary rounded-4 m-2">
              <div className="text-center my-auto w-25">
                <WiHumidity className="fs-1" />
              </div>
              <div className="my-auto">
                <p className="m-0 fs-5 text-secondary">
                  Humidity:{" "}
                  <span className="text-dark fw-bold">
                    {weatherData.main.humidity} %
                  </span>
                </p>
              </div>
            </Col>
            <Col className="d-flex flex-column justify-content-center align-items-center p-3 rounded-4 shadow-lg p-3 mb-5 bg-body-secondary rounded-4 m-2">
              <p className="fs-5 text-secondary">
                Weather:{" "}
                <span className="text-dark fw-bold text-capitalize">
                  {weatherData.weather[0].description}
                </span>
              </p>
            </Col>
            <Col className="d-flex flex-column justify-content-center align-items-center p-2 rounded-4 shadow-lg p-3 mb-5 bg-body-secondary rounded-4 m-2">
              <p className="fs-5 text-secondary">
                Wind speed:{" "}
                <span className="text-dark fw-bold">
                  {weatherData.wind.speed} km/h
                </span>
              </p>
              <p className="fs-5 text-secondary">
                Wind degrees:{" "}
                <span className="text-dark fw-bold">
                  {weatherData.wind.deg}°
                </span>
              </p>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};

export default Weather;
