export const TodayWeatherCard = ({ data }) => {
  
  return (
    <div className="bg-gray-900 p-4 rounded-lg text-white flex flex-col items-center">
      <span className="text-sm mb-2">{data.time}</span>
      <img src={data.icon} alt="Weather Icon"/>
      <span className="text-2xl mt-2">{data.temperature}°</span>
      <div className="mt-2 flex items-center">
        <span className="text-sm">{data.windSpeed} km/h</span>
      </div>
    </div>
  );
};
