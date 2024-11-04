import React from "react";

// Create a new context
const WeatherContext = React.createContext();


export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = React.useState(null);
  const [location, setLocation] = React.useState("New York");

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        setWeatherData,
        location,
        setLocation
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
