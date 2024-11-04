import React from "react";
import { Calendar } from "lucide-react";
import WeatherContext from "../context/weatherContext";
// import DayForecast from "./DayForecast";
import { DailyForecast } from "./index";

const DailyForecast = () => {
  const { weatherData } = React.useContext(WeatherContext);
  console.log(weatherData);

  const dates = [0, 1, 2];
  const dateObjects = dates.map((index) => {
    const date = new Date(weatherData?.forecast?.forecastday[index].date);
    const day = date.toLocaleString("en-us", { weekday: "long" });
    return day;
  });

  const forecast = [
    {
      day: `${dateObjects[0].slice(0, 3)}`,
      icon: `${weatherData?.forecast?.forecastday?.[0]?.day?.condition?.icon}`,
      lowTemp: `${weatherData?.forecast?.forecastday?.[0]?.day?.mintemp_c}`,
      highTemp: `${weatherData?.forecast?.forecastday?.[0]?.day?.maxtemp_c}`,
      // tempRange: [10 , 40],
    },
    {
      day: `${dateObjects[1].slice(0, 3)}`,
      icon: `${weatherData?.forecast?.forecastday?.[1]?.day?.condition?.icon}`,
      lowTemp: `${weatherData?.forecast?.forecastday?.[1]?.day?.mintemp_c}`,
      highTemp: `${weatherData?.forecast?.forecastday?.[1]?.day?.maxtemp_c}`,
      // tempRange: [40, 20, 40],
    },
    {
      day: `${dateObjects[2].slice(0, 3)}`,
      icon: `${weatherData?.forecast?.forecastday?.[2]?.day?.condition?.icon}`,
      lowTemp: `${weatherData?.forecast?.forecastday?.[2]?.day?.mintemp_c}`,
      highTemp: `${weatherData?.forecast?.forecastday?.[2]?.day?.maxtemp_c}`,
      // tempRange: [30, 40, 30],
    },
  ];

  return (  
    <div className="bg-black text-white p-6 rounded-xl w-full sm:w-[90%] md:w-[50%]
    lg:w-[90%] mb-0 lg:mb-2 border-2 border-white">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <Calendar className="mr-2" />
        3-Day Forecast
      </h2>
      <div className="space-y-1">
        {forecast.map((day, index) => (
          <DayForecast key={index} {...day} />
        ))}
      </div>
    </div>
  );
};

export default DailyForecast;
