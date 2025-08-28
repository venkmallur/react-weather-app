Here are some personal notes on the architecture and key concepts used in this project.

1. State Management: "Lifting State Up"
   The core state (weatherData, loading, error) is managed exclusively in the parent App.jsx component. This makes App.jsx the single source of truth.

Data flows down from App.jsx to WeatherDisplay.jsx via props.

Information flows up from SearchBar.jsx to App.jsx via a callback function (onSearch) that is passed down as a prop. This is the standard pattern for child-to-parent communication in React.

2. API Usage: Two-Step Process
   The Open-Meteo weather API requires latitude and longitude.

To accommodate user input (city names), a two-step API call is necessary:

First, the city name is sent to the Geocoding API to get its coordinates.

Second, those coordinates are used to call the Forecast API to get the actual weather data.

3. Future Improvements
   Weather Icons: Replace the text/emoji interpretations with a dedicated weather icon library (e.g., React Icons).

5-Day Forecast: Extend the API call to fetch forecast data and display it in a separate component.

Geolocation: Add a feature to automatically detect the user's location on page load and display their local weather.

localStorage: Save the user's last searched city to localStorage so it persists between sessions.
