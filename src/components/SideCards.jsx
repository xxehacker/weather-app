import React from "react";
import WeatherCard from "./WeatherCard";
import DailyForecast from "./DailyForecast";

function SideCards() {

  return (
    <div className="w-full flex flex-col  gap-4 items-center justify-center md:flex-row  lg:w-1/3 lg:flex-col ">
      <WeatherCard />
      <DailyForecast />
    </div>
  );
}

export default SideCards;
