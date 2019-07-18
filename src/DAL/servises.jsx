import { APIXUKey, OpenWeatherMapKey, GeocodingKey } from '../ApiKeys/ApiKeys';


export const OpenWeatherMapAPI = async (city) => {
  const apiUrl = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OpenWeatherMapKey}&units=metric`,
  );
  const data = await apiUrl.json();
  const result = (data.cod === 200)
    ? {
      temp: data.main.temp.toFixed(1),
      pressure: data.main.pressure,
      humidity: data.main.humidity,
      wind: data.wind.speed.toFixed(2),
      city: data.name,
      country: data.sys.country,
      date: new Date(),
      error: '',
    }
    : { error: data.message };
  return result;
};

export const APIXUAPI = async (city) => {
  const apiUrl = await fetch(`https://api.apixu.com/v1/current.json?key=${APIXUKey}&q=${city}`);
  const data = await apiUrl.json();
  const result = (data.error === undefined)
    ? {
      temp: data.current.temp_c.toFixed(1),
      pressure: data.current.pressure_mb,
      humidity: data.current.humidity,
      wind: ((data.current.wind_kph * 1000) / 3600).toFixed(2),
      city: data.location.name,
      country: data.location.country,
      date: new Date(),
      error: '',
    }
    : { error: data.error.message };
  return result;
};
// API location determination
export const Geocoding = async (latitude, longitude) => {
  const apiUrl = await fetch(`https://eu1.locationiq.com/v1/reverse.php?key=${GeocodingKey}&lat=${latitude}&lon=${longitude}&format=json`);
  const data = await apiUrl.json();
  const result = data.address.city;
  return result;
};
