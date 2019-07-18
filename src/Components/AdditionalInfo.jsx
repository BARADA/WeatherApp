import React from 'react';
import PropTypes from 'prop-types';
import style from '../Styles/AdditionalInfo.module.css';

const AdditionalInfo = ({ currentLocation, selectedService }) => (
  <div className={style.navbar}>
    <span>Текущее местоположение - </span>
    {currentLocation}
    <br />
    <span>Выбранный сервис - </span>
    {selectedService}
    <br />
  </div>
);
AdditionalInfo.defaultProps = {
  selectedService: '',
  currentLocation: '',
};
AdditionalInfo.propTypes = {
  selectedService: PropTypes.string,
  currentLocation: PropTypes.string,
};
export default AdditionalInfo;
