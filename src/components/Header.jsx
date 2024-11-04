import React, { useEffect, useContext } from "react";
import { SunSnow, MapPin } from "lucide-react";
import { getCurrentLocation } from "../api/currentLocationApi";
import WeatherContext from "../context/weatherContext";

function Header() {
  const { setLocation, mylocation, setMylocation } = useContext(WeatherContext);
  const [inputValue, setInputValue] = React.useState("");

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const data = await getCurrentLocation();
        setMylocation(data.city);
      } catch (error) {
        console.error("Error fetching location data:", error);
      }
    };
    fetchLocation();
  }, []);

  const handleSearch = () => {
    setLocation(inputValue);
    setInputValue('');
  };

  const handleMyLocation = () => {
    if (mylocation) {
      setLocation(mylocation);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center md:justify-between md:items-center md:flex-row w-full gap-2 p-4">
      <div className="flex gap-2 justify-center items-center text-white">
        <SunSnow size={45} />
        <h1 className="text-2xl md:text-3xl font-bold">Weather App</h1>
      </div>
      <div className="flex gap-2 justify-center w-[90%] md:w-1/3 items-center text-black">
        <input
          type="text"
          className="p-4 rounded-lg w-full text-lg"
          placeholder="Enter city name"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <button
          className="bg-blue-500 text-white p-4 px-5 md:px-6 lg:px-10 rounded-lg hover:bg-blue-700 text-lg"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div>
        <button
          className="bg-green-500 text-white p-4 px-2 md:px-3 lg:px-4 rounded-lg flex gap-2 hover:bg-green-700"
          onClick={handleMyLocation}
        >
          <MapPin size={25} /> My Location
        </button>
      </div>
    </div>
  );
}

export default Header;
