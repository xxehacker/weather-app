import React from "react";
import { TodayWeatherCard } from "./index";
import WeatherContext from "../context/weatherContext";
import { TrendingUpDown } from "lucide-react";

export default function WeatherForecast() {
  const { weatherData } = React.useContext(WeatherContext);

  const hoursToDisplay = [5, 8, 10, 13, 15, 18, 20, 23];
  const forecast = hoursToDisplay.map((hourIndex) => {
    const hourData = weatherData?.forecast?.forecastday?.[0]?.hour?.[hourIndex];
    return {
      time: hourData?.time.split(' ')[1],
      icon: hourData?.condition?.icon,
      temperature: hourData?.temp_c,
      windSpeed: hourData?.wind_kph, 
      windDirection: hourData?.wind_dir, 
    };
  });

  return (
    <div className="bg-black p-2 md:p-6 rounded-xl w-full">
      <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
        <TrendingUpDown className="mr-2" />
        Today at</h2>
      <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
        {forecast.map((data, index) => (
          <TodayWeatherCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
}
