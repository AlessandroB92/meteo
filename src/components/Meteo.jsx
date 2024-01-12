// src/components/Meteo.js
import React, { useState } from 'react';
import axios from 'axios';

const Meteo = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const getWeatherData = async () => {
    try {
      const apiKey = 'TUACHIAVEAPI'; // Sostituisci con la tua chiave API
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      const response = await axios.get(apiUrl);
      setWeather(response.data);
    } catch (error) {
      console.error('Errore nel recupero dei dati meteorologici:', error);
    }
  };

  return (
    <div>
      <h2>App Meteo</h2>
      <input
        type="text"
        placeholder="Inserisci il nome della città"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getWeatherData}>Ottieni Meteo</button>

      {weather && (
        <div>
          <h3>{weather.name}</h3>
          <p>Temperatura: {weather.main.temp}°C</p>
          <p>Condizioni: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Meteo;
