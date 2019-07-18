import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AdditionalInfo from '../Components/AdditionalInfo';
import { Geocoding } from '../DAL/servises';

const AdditionalInfoContainer = ({ selectedService }) => {
  // Save currentLocation name
  const [currentLocation, setCurrentLocation] = useState();
  // Positioning and saving.
  useEffect(() => {
    if (!currentLocation) {
      navigator.geolocation.getCurrentPosition(p => Geocoding(p.coords.latitude, p.coords.longitude)
        .then(res => setCurrentLocation(res)));
    }
  }, [currentLocation]);
  return <AdditionalInfo currentLocation={currentLocation} selectedService={selectedService} />;
};

AdditionalInfoContainer.propTypes = {
  selectedService: PropTypes.string.isRequired,
};

export default AdditionalInfoContainer;
