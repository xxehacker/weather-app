import React from "react";

function DayForecast({ day, icon, lowTemp, highTemp, tempRange }) {
  
  const WeatherIcon = ({ icon }) => {
    return (
      <div className="flex justify-center items-center">
         <img src={icon} alt="weather icon" width={60} height={60} />
      </div>
    )
  };

  return (
    <div className="flex items-center justify-between py-5 md:py-1.5 lg:py-5">
      <span className=" text-sm font-medium">{day}</span>
      <WeatherIcon icon={icon} />
      <span className="text-sm">Min {lowTemp}°</span>
      {/* <div className="w-24 h-1 mx-2 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-400 via-green-400 to-blue-400"
          style={{
            width: `${tempRange[1]}%`,
            marginLeft: `${tempRange[0]}%`,
          }}
        />
      </div> */}
      <span className="text-sm">Max {highTemp}°</span>
    </div>
  );
}

export default DayForecast;
