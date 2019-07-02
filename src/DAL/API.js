export const OpenWeatherMapAPI = async (city) => {
    let result;
    let apiUrl = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=053124b70fdd14d21929c236ad14d398&units=metric`);
    let data = await apiUrl.json();
     (data.cod === 200 ?
        result = {
            temp: (data.main.temp).toFixed(1),
            pressure: data.main.pressure,
            humidity: data.main.humidity,
            wind: (data.wind.speed).toFixed(2),
            city: data.name,
            country: data.sys.country,
            date: new Date(),
            error: ''
        } : result = { error: data.message });
        return result
}

export const APIXUAPI = async (city) => {
    let result;
    let apiUrl = await fetch(`https://api.apixu.com/v1/current.json?key=773d5e2443e14ce885b161201191506&q=${city}`);
    let data = await apiUrl.json();
     (data.error === undefined ? 
        result = {
            temp: (data.current.temp_c).toFixed(1),
            pressure: data.current.pressure_mb,
            humidity: data.current.humidity,
            wind: (data.current.wind_kph * 1000 / 3600).toFixed(2),
            city: data.location.name,
            country: data.location.country,
            date: new Date(),
            error: ""
        } : result = { error: data.error.message });
        return result
}
// API location determination
export const Geocoding = async (latitude, longitude) => {
    let apiUrl =  await fetch(`https://eu1.locationiq.com/v1/reverse.php?key=637489241c01de&lat=${latitude}&lon=${longitude}&format=json`);
    let data =  await apiUrl.json();
    let result = data.address.city;
    return result
}