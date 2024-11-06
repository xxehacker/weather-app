import React from "react";
import {WeatherDashboard , WeatherForecast} from "./index";
import WeatherContext from "../context/weatherContext";

function MainCards() {

  const { weatherData} = React.useContext(WeatherContext);
  // console.log(weatherData);
  

  const weatherDatas = {
    airQuality: {
      index: `${weatherData?.current?.condition?.text}`,
      wind_mph: `${weatherData?.current?.wind_mph}`,
      wind_kph: `${weatherData?.current?.wind_kph}`,
      wind_degree: `${weatherData?.current?.wind_degree}`,
      wind_dir: `${weatherData?.current?.wind_dir}`,
    },
    sunriseSunset: {
      sunrise: `${weatherData?.forecast?.forecastday?.[0]?.astro?.sunrise}`,
      sunset: `${weatherData?.forecast?.forecastday?.[0]?.astro?.sunset}`,
    },
    humidity: `${weatherData?.current?.humidity} `,
    pressure: `${weatherData?.current?.pressure_in} `,
    visibility: `${weatherData?.current?.vis_km }`,
    feelsLike: `${weatherData?.current?.feelslike_c } `
  };

  return (
    <div className="w-full p-4  lg:mr-10 mb-2 flex justify-center items-center bg-black gap-4 rounded-2xl border-2 border-white flex-col sm:w-[90%] md:w-full">
      <WeatherDashboard {...weatherDatas} />
      <WeatherForecast />
    </div>
  );
}

export default MainCards;
