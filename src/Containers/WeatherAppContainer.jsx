import React, { useState, useEffect } from 'react';
import WeatherDataDisplay from '../Components/WeatherDataDisplay';
import InputValueForSearch from '../Components/InputValueForSearch';
import AdditionalInfoContainer from './AdditionalInfoContainer';
import { OpenWeatherMapAPI, APIXUAPI } from '../DAL/servises';
import { PermanentStorageData, PermanentStorageAPI } from '../DAL/PermanentStorage';
import style from '../Styles/WeatherAppContainer.module.css';

const WeatherAppContainer = () => {
  // State storage
  const [cityNameEntered, setCityNameEntered] = useState('');
  const [selectedService, setSelectedService] = PermanentStorageAPI('SelectedAPI');
  const [dataLoadIndicator, setDataLoadIndicator] = useState(false);
  const [weatherData, setWeatherData] = PermanentStorageData(selectedService);
  // Calling up new data from the server
  const getWeatherData = (cityName = weatherData.city, api = selectedService) => {
    switch (api) {
      case 'OpenWeatherMap':
        setDataLoadIndicator(true);
        OpenWeatherMapAPI(cityName)
          .then(result => setWeatherData(result))
          .then(() => setDataLoadIndicator(false))
          .then(() => setCityNameEntered(''))
          .catch(error => setWeatherData({ error }));
        break;
      case 'APIXU':
        setDataLoadIndicator(true);
        APIXUAPI(cityName)
          .then(result => setWeatherData(result))
          .then(() => setDataLoadIndicator(false))
          .then(() => setCityNameEntered(''))
          .catch(error => setWeatherData({ error }));
        break;
      default:
    }
  };
  // New request two hours later
  const updateInterval = 7200000;
  const currentTime = Date.parse(new Date());
  const lastUpdateTime = Date.parse(weatherData.date) + updateInterval;
  const updateByTime = () => {
    if (currentTime > lastUpdateTime) {
      getWeatherData();
    }
  };
  useEffect(updateByTime, []);

  // Dispatching the city to the API
  const getDataForTheEnteredCity = (e) => {
    e.preventDefault();
    const apiNameEntered = e.target.elements.checkedWeather.value;
    setSelectedService(apiNameEntered);
    getWeatherData(cityNameEntered, apiNameEntered);
  };
  // Temporary storage of input data
  const setInputValue = e => setCityNameEntered(e.target.value);

  return (
    <div className={style.weather}>
      <InputValueForSearch
        getDataForTheEnteredCity={getDataForTheEnteredCity}
        setInputValue={setInputValue}
        cityNameEntered={cityNameEntered}
        dataLoadIndicator={dataLoadIndicator}
        selectedService={selectedService}
      />
      <div className={style.result}>
        <WeatherDataDisplay weatherData={weatherData} />
        <AdditionalInfoContainer selectedService={selectedService} />
      </div>
    </div>
  );
};

export default WeatherAppContainer;
