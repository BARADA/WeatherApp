import React from 'react';
import PropTypes from 'prop-types';
import style from '../Styles/InputValueForSearch.module.css';

const InputValueForSearch = (props) => {
  const {
    getDataForTheEnteredCity, cityNameEntered, setInputValue, dataLoadIndicator, selectedService,
  } = props;
  return (
    <div className={style.form}>
      <form onSubmit={getDataForTheEnteredCity}>
        <h3>Выберите сервис</h3>
        <div className={style.checkedWeather}>
          <label htmlFor="openWeather">
            <div className={style.input}>
              <input
                id="openWeather"
                type="radio"
                name="checkedWeather"
                value="OpenWeatherMap"
                defaultChecked={selectedService === 'OpenWeatherMap'}
              />
              <div className={style.label}>OpenWeatherMap</div>
            </div>
          </label>
          <label htmlFor="APIXU">
            <div className={style.input}>
              <input
                id="APIXU"
                type="radio"
                name="checkedWeather"
                value="APIXU"
                defaultChecked={selectedService === 'APIXU'}
              />
              <div className={style.label}>APIXU</div>
            </div>
          </label>
        </div>
        <div className={style.inputCity}>
          <input
            type="text"
            name="city"
            onChange={setInputValue}
            value={cityNameEntered}
            placeholder="город"
          />
          <button type="submit" disabled={dataLoadIndicator}>Узнать</button>
        </div>
      </form>
    </div>
  );
};
InputValueForSearch.defaultProps = {
  getDataForTheEnteredCity: PropTypes.func,
  setInputValue: PropTypes.func,
  dataLoadIndicator: false,
  cityNameEntered: '',
  selectedService: '',
};
InputValueForSearch.propTypes = {
  getDataForTheEnteredCity: PropTypes.func,
  setInputValue: PropTypes.func,
  dataLoadIndicator: PropTypes.bool,
  cityNameEntered: PropTypes.string,
  selectedService: PropTypes.string,
};
export default InputValueForSearch;
