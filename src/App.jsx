import { useState } from "react";
import SearchBar from "./searchBar";
import WeatherDisplay from "./weatherDisplay";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (city) => {
    setLoading(true);
    setError(null);
    setWeatherData(null);

    try {
      // 1. Geocoding
      const geoResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
      );
      const geoData = await geoResponse.json();

      if (!geoData.results) {
        throw new Error("City not found. Please try another.");
      }
      const { latitude, longitude, name } = geoData.results[0];

      // 2. Weather Forecast
      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      const weatherData = await weatherResponse.json();

      setWeatherData({ ...weatherData, name });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="weather-card">
      <SearchBar onSearch={handleSearch} />
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      {weatherData && <WeatherDisplay data={weatherData} />}
    </div>
  );
}

export default App;
