import { Wind, Sun, Moon, Droplet, Eye, Thermometer, Highlighter } from "lucide-react"

const defaultProps = {
  airQuality: {
    index: "N/A",
    pm25: 0,
    so2: 0,
    no2: 0,
    o3: 0
  },
  sunriseSunset: {
    sunrise: "N/A",
    sunset: "N/A"
  },
  humidity: 0,
  pressure: 0,
  visibility: 0,
  feelsLike: 0
}

export default function WeatherDashboard(props = defaultProps) {
  const {
    airQuality,
    sunriseSunset,
    humidity,
    pressure,
    visibility,
    feelsLike
  } = props

  return (
    <div className="bg-black text-white p-2 md:p-6 rounded-lg w-full mx-auto">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <Highlighter className="mr-2" />
        Todays Highlights</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-900 p-4 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg">Air</h3>
            <span className="bg-green-500 text-black px-2 py-1 rounded text-sm">{airQuality.index}</span>
          </div>
          <div className="grid grid-cols-4 gap-2 text-center">
            <div>
              <p className="text-xs text-gray-400">Wind_mph.5</p>
              <p className="text-xl">{airQuality.wind_mph}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400">Wind_kph</p>
              <p className="text-xl">{airQuality.wind_kph}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400">Wind_degree</p>
              <p className="text-xl">{airQuality.wind_degree}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400">Wind_dir</p>
              <p className="text-xl">{airQuality.wind_dir}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-900 p-4 rounded-lg">
          <h3 className="text-lg mb-2">Sunrise & Sunset</h3>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Sun className="mr-2" />
              <div>
                <p className="text-xs text-gray-400">Sunrise</p>
                <p className="text-xl">{sunriseSunset.sunrise}</p>
              </div>
            </div>
            <div className="flex items-center">
              <Moon className="mr-2" />
              <div>
                <p className="text-xs text-gray-400">Sunset</p>
                <p className="text-xl">{sunriseSunset.sunset}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-900 p-4 rounded-lg flex items-center">
          <Droplet className="mr-4" size={24} />
          <div>
            <p className="text-xs text-gray-400">Humidity</p>
            <p className="text-2xl">{humidity}%</p>
          </div>
        </div>
        
        <div className="bg-gray-900 p-4 rounded-lg flex items-center">
          <Wind className="mr-4" size={24} />
          <div>
            <p className="text-xs text-gray-400">Pressure</p>
            <p className="text-2xl">{pressure}hPa</p>
          </div>
        </div>
        
        <div className="bg-gray-900 p-4 rounded-lg flex items-center">
          <Eye className="mr-4" size={24} />
          <div>
            <p className="text-xs text-gray-400">Visibility</p>
            <p className="text-2xl">{visibility}km</p>
          </div>
        </div>
        
        <div className="bg-gray-900 p-4 rounded-lg flex items-center">
          <Thermometer className="mr-4" size={24} />
          <div>
            <p className="text-xs text-gray-400">Feels Like</p>
            <p className="text-2xl">{feelsLike}°c</p>
          </div>
        </div>
      </div>
    </div>
  )
}