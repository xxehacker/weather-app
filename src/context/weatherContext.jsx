import React from "react";

// Create a new context
const WeatherContext = React.createContext();


export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = React.useState(null);
  const [location, setLocation] = React.useState("New York");
  const [mylocation, setMylocation] = React.useState("");

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        setWeatherData,
        location,
        setLocation,
        mylocation,
        setMylocation,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
