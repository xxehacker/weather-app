import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet"; // Import Leaflet for custom icon
import WeatherContext from "../context/weatherContext";
import { useMap } from "react-leaflet";

// Import the default marker icon
import markerIcon from "leaflet/dist/images/marker-icon.png"; 

function Map() {
  const { weatherData } = React.useContext(WeatherContext);
  const defaultCenter = [50.5, 30.5];
  const position = weatherData?.location
    ? [weatherData.location.lat, weatherData.location.lon]
    : defaultCenter;

  // Create a custom icon for the marker
  const customIcon = L.icon({
    iconUrl: markerIcon,
    iconSize: [25, 41], 
    iconAnchor: [12, 41], 
    popupAnchor: [1, -34], 
  });

  return (
    <div className="flex justify-center items-center w-full sm:w-[90%] md:w-full">
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "50vh", width: "95%", margin: "auto", borderRadius: "30px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={customIcon}>
          <Popup>A marker is a point on a map</Popup>
        </Marker>
        <MapUpdater center={position} />
      </MapContainer>
    </div>
  );
}

const MapUpdater = ({ center }) => {
  const map = useMap();

  React.useEffect(() => {
    map.setView(center); // Re-center map when the center prop changes
  }, [center, map]);

  return null;
};

export default Map;
