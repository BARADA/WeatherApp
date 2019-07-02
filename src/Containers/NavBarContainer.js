import React, {useState, useEffect} from 'react';
import NavBar from '../Components/NavBar';
import { Geocoding } from '../DAL/API';


const NavBarContainer = ({nameApi}) => {
// Save city name
    let [city, setCity] = useState(undefined);
// Positioning and saving
    useEffect(() => {
        if (!city) {
        navigator.geolocation.getCurrentPosition(position => {
            Geocoding(position.coords.latitude, position.coords.longitude)
            .then(res => setCity(res))
        }) 
    }
    },[city]);
    return <NavBar name={city} nameApi={nameApi} />
}

export default NavBarContainer;