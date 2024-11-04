import React, { useContext, useEffect } from "react";
import WeatherContext from "../context/weatherContext";
import { getWeatherData } from "../api/weatherApi";
import { useQuery } from "@tanstack/react-query";

function WeatherCard() {
  const { location, setWeatherData, weatherData } = useContext(WeatherContext);

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["weather", location],
    queryFn: () =>
      getWeatherData(
        "https://api.weatherapi.com/v1",
        "492cfb3a3328486d91e131219240310",
        location
      ),
    enabled: !!location, // Only run query if location has a value
  });

  useEffect(() => {
    if (data) {
      setWeatherData(data);
    }
  }, [data, setWeatherData]);

  if (isLoading) return <span>Loading...</span>;
  if (isError) return <span>Error: {error.message}</span>;

  return (
    <div className="flex flex-col items-center justify-center p-8 rounded-2xl w-full sm:w-[90%] md:w-[50%] lg:w-[90%] sm:px-12 border-2 border-white bg-black text-gray-100">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-center">
          {weatherData?.location?.name}
        </h2>
        <h3 className="text-sm text-gray-200">
          {weatherData?.location?.country}
        </h3>
        <p className="text-sm text-gray-400 text-center mt-2">
          {weatherData?.location?.localtime}
        </p>
      </div>

      <div>
        <img
          src={weatherData?.current?.condition?.icon}
          alt="Weather Icon"
          className="w-20 h-20 my-4"
        />
      </div>

      <div className="mb-2 text-2xl font-semibold flex items-center justify-center">
        {weatherData?.current?.temp_f}°F{" "}
        <span className="mx-1 font-normal">/</span>
        {weatherData?.current?.temp_c}°C
      </div>
      <p className="text-gray-400">{weatherData?.current?.condition?.text}</p>
    </div>
  );
}

export default WeatherCard;
