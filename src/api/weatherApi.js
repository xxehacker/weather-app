import axios from "axios";

export const getWeatherData = async (baseUrl, apiKey, city) => {
  const forecastUrl = `${baseUrl}/forecast.json?key=${apiKey}&q=${city}&days=3`;
  try {
    const res = await axios.get(forecastUrl);
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
