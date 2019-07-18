import React from 'react';
import PropTypes from 'prop-types';
import style from '../Styles/WeatherDataDisplay.module.css';

const WeatherDataDisplay = ({ weatherData }) => (
  <div className={style.info}>
    {(weatherData.error === '') ? (
      <div className={style.result}>
        <h3>
          {`${weatherData.city} `}
          <span>{weatherData.country}</span>
        </h3>
        <div className={style.infoResult}>
          <div>Температура воздуха:</div>
          <span>
            {weatherData.temp}
            &deg;C
          </span>
        </div>
        <div className={style.infoResult}>
          <div>Влажность воздуха:</div>
          <span>{`${weatherData.humidity} %`}</span>
        </div>
        <div className={style.infoResult}>
          <div>Скорость ветра:</div>
          <span>{`${weatherData.wind} м/c`}</span>
        </div>
        <div className={style.infoResult}>
          <div>Давление:</div>
          <span>{`${weatherData.pressure} мм`}</span>
        </div>
      </div>
    ) : (
      <div className={style.result}>
        <h3>Город не найден!</h3>
      </div>
    )}
  </div>
);

WeatherDataDisplay.defaultProps = {
  weatherData: {},
};

WeatherDataDisplay.propTypes = {
  weatherData: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
    date: PropTypes.any,
    error: PropTypes.string,
    humidity: PropTypes.number,
    pressure: PropTypes.number,
    temp: PropTypes.string,
    wind: PropTypes.string,
  }),
};
export default WeatherDataDisplay;
