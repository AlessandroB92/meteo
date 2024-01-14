import React, { useState } from 'react';
import {Row, Col} from 'react-bootstrap';
import axios from 'axios';

const Forecast = () => {
  const [city, setCity] = useState('');
  const [forecastData, setForecastData] = useState(null);

  const apiKey = '94292a708cbc285b8248f4e63ffa0bc4';

  const getForecastData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&lang=it`
      );

      setForecastData(response.data);
    } catch (error) {
      console.error('Error fetching forecast data:', error);
    }
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <div className="container mt-5">
      <h2>5-Day Weather Forecast</h2>
      <div className="mb-3">
        <label htmlFor="cityInput" className="form-label">
          Enter City:
        </label>
        <input
          type="text"
          className="form-control"
          id="cityInput"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={getForecastData}>
        Get Forecast
      </button>

      {forecastData && (
        <Row className="mt-3">
          {forecastData.list.map((forecast, index) => (
            <Col xs={3}>
              <div key={index} className="card shadow-lg mb-5 bg-warning rounded-4">
                <div className="card-body">
                  <h5 className="card-title text-capitalize">{formatDate(forecast.dt)}</h5>
                  <p className="card-text">Temperature: {forecast.main.temp}°C</p>
                  <p className="card-text">Humidity: {forecast.main.humidity}%</p>
                  <p className="card-text">Weather: {forecast.weather[0].description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default Forecast;
