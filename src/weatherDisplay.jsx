import React from "react";

function WeatherDisplay({ data }) {
  // The API gives a weather code (e.g., 0 for Clear Sky).
  // This is a very simple function to interpret a few codes.
  const getWeatherInterpretation = (code) => {
    if (code === 0) return "☀️ Clear Sky";
    if (code > 0 && code < 4) return "☁️ Partly Cloudy";
    if (code > 50 && code < 68) return "🌧️ Drizzle/Rain";
    if (code > 79 && code < 83) return "🌧️ Rain Showers";
    return "🤔 Check Forecast";
  };

  return (
    <div className="weather-display">
      <h2>{data.name}</h2>
      <p style={{ fontSize: "4rem", margin: "10px 0" }}>
        {data.current_weather.temperature}°C
      </p>
      <p>{getWeatherInterpretation(data.current_weather.weathercode)}</p>
      <p>Wind: {data.current_weather.windspeed} km/h</p>
    </div>
  );
}

export default WeatherDisplay;
